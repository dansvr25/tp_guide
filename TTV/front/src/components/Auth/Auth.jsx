import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/Api.js';

function Auth({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleAuthToggle() {
    setName('');
    setEmail('');
    setPassword('');
    setIsLogin(!isLogin);
  }

  function handleError(err) {
    setError(err);
    setTimeout(() => setError(''), 3000);
  }

  function handleSuccessSubmit() {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
    navigate('/');
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    api.login({
      email,
      password,
    })
      .then(() => handleSuccessSubmit())
      .catch((err) => handleError(err));
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();

    api.register({
      name,
      email,
      password,
    })
      .then(() => handleSuccessSubmit())
      .catch((err) => handleError(err));
  }

  return (
    <div className="auth">
      <div className="auth__container">
        {
          isLogin ? (
            <form className="auth__form" onSubmit={handleLoginSubmit}>
              <h2 className="auth__title">
                Авторизация
              </h2>
              <label className="auth__label" htmlFor="login">
                <p className="auth__text-label">
                  Логин
                </p>
                <input className="auth__input" id="login" type="text" value={email} onChange={handleEmailChange} />
              </label>
              <label className="auth__label" htmlFor="pass">
                <p className="auth__text-label">
                  Пароль
                </p>
                <input className="auth__input" id="pass" type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <p className="auth__text">
                {error}
              </p>
              <button type="submit" className="auth__button">
                Войти
              </button>
              <p className="auth__text">
                Не зарегистрированы?
                {' '}
                <button type="button" className="auth__link" onClick={handleAuthToggle}>
                  Зарегистрироваться
                </button>
              </p>
            </form>
          ) : (
            <form className="auth__form" onSubmit={handleRegisterSubmit}>
              <h2 className="auth__title">
                Регистрация
              </h2>
              <label className="auth__label" htmlFor="name">
                <p className="auth__text-label">
                  ФИО
                </p>
                <input className="auth__input" id="name" type="text" value={name} onChange={handleNameChange} />
              </label>
              <label className="auth__label" htmlFor="login">
                <p className="auth__text-label">
                  Логин
                </p>
                <input className="auth__input" id="login" type="text" value={email} onChange={handleEmailChange} />
              </label>
              <label className="auth__label" htmlFor="pass">
                <p className="auth__text-label">
                  Пароль
                </p>
                <input className="auth__input" id="pass" type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <p className="auth__text">
                {error}
              </p>
              <button type="submit" className="auth__button">
                Зарегистрироваться
              </button>
              <p className="auth__text">
                Уже зарегистрированы?
                {' '}
                <button type="button" className="auth__link" onClick={handleAuthToggle}>
                  Войти
                </button>
              </p>
            </form>
          )
        }
      </div>
    </div>
  );
}

export default Auth;

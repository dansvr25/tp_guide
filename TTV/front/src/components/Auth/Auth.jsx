import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  function handleAuthToggle() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="auth">
      <div className="auth__container">
        {
          isLogin ? (
            <form className="auth__form">
              <h2 className="auth__title">
                Авторизация
              </h2>
              <label className="auth__label" htmlFor="login">
                <p className="auth__text-label">
                  Логин
                </p>
                <input className="auth__input" id="login" type="text" />
              </label>
              <label className="auth__label" htmlFor="pass">
                <p className="auth__text-label">
                  Пароль
                </p>
                <input className="auth__input" id="pass" type="password" />
              </label>
              <Link to="/main" className="auth__button">
                Войти
              </Link>
              <p className="auth__text">
                Не зарегистрированы?
                {' '}
                <button type="button" className="auth__link" onClick={handleAuthToggle}>
                  Зарегистрироваться
                </button>
              </p>
            </form>
          ) : (
            <form className="auth__form">
              <h2 className="auth__title">
                Регистрация
              </h2>
              <label className="auth__label" htmlFor="name">
                <p className="auth__text-label">
                  ФИО
                </p>
                <input className="auth__input" id="name" type="text" />
              </label>
              <label className="auth__label" htmlFor="login">
                <p className="auth__text-label">
                  Логин
                </p>
                <input className="auth__input" id="login" type="text" />
              </label>
              <label className="auth__label" htmlFor="pass">
                <p className="auth__text-label">
                  Пароль
                </p>
                <input className="auth__input" id="pass" type="password" />
              </label>
              <Link to="/main" className="auth__button">
                Зарегистрироваться
              </Link>
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

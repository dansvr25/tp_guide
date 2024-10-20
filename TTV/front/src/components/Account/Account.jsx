import React from 'react';
import { useNavigate } from 'react-router-dom';

function Account({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  }

  return (
    <div className="account">
      <div className="account__container">
        <div className="account__column">
          <img src="https://images.ladbible.com/resize?type=webp&quality=70&width=1920&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltcd74acc1d0a99f3a/blt7dc715fcd9324509/64b1609273ef23488c840278/exeter-ai.png" alt="аватар" className="account__img" />
        </div>
        <div className="account__column">
          <p className="account__text">
            Email:
            {' '}
            {localStorage.getItem('userEmail')}
          </p>
          <button type="button" onClick={handleLogout} className="account__button">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;

import React from 'react';
import account from '../../images/account.jpg';

function Account() {
  return (
    <div className="account">
      <div className="account__container">
        <div className="account__column">
          <img src={account} alt="фото аккаунта" className="account__img" />
        </div>
        <div className="account__column">
          <p className="account__text">
            ФИО: Свиридов Данила Владимирович
          </p>
          <p className="account__text">
            Email: mrsviri25@gmail.com
          </p>
          <button type="button" className="account__button">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;

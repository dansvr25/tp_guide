import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/main" />
      <div className="header__buttons">
        <Link to="/account" className="header__button">
          Аккаунт
        </Link>
        <Link to="/guides" className="header__button">
          Все гиды
        </Link>
        <Link to="/guides/favorite" className="header__button">
          Мои гиды
        </Link>
      </div>
    </header>
  );
}

export default Header;

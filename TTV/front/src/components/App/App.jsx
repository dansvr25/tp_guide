import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Guide from '../Guide/Guide.jsx';
import Guides from '../Guides/Guides.jsx';
import FavoriteGuides from '../FavoriteGuides/FavoriteGuides.jsx';
import Account from '../Account/Account.jsx';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/favorite" element={<FavoriteGuides />} />
          <Route path="/guides/:id" element={<Guide />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

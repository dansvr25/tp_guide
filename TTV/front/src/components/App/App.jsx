import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Guide from '../Guide/Guide.jsx';
import Guides from '../Guides/Guides.jsx';
import FavoriteGuides from '../FavoriteGuides/FavoriteGuides.jsx';
import Account from '../Account/Account.jsx';
import Auth from '../Auth/Auth.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, []);

  return (
    <div className="app">
      {
        isLoggedIn ? (
          <div className="app__container">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/account" element={<Account setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/guides/favorite" element={<FavoriteGuides />} />
              <Route path="/guides/:id" element={<Guide />} />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
            <Route
              path="*"
              element={<Navigate to="/auth" replace />}
            />
          </Routes>
        )
      }
    </div>
  );
}

export default App;

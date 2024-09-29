import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GuideCard from '../GuideCard/GuideCard.jsx';
import api from '../../utils/Api.js';

function Main() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    api.getGuides()
      .then((res) => setGuides(res.slice(0, 3)));
  }, []);

  return (
    <main className="main">
      <div className="main__text">
        <h2 className="main__subtitle">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#CBF36E" />
          </svg>
          По Воронежу и области
        </h2>
        <h1 className="main__title">
          Гиды для вас
        </h1>
        <Link to="/guides" className="main__button">
          Посмотреть все
        </Link>
      </div>
      <div className="main__guides">
        {
          guides.map((guide, index) => (
            // eslint-disable-next-line max-len
            index === 1 ? <GuideCard data={guide} key={guide.id} main even /> : <GuideCard data={guide} key={guide.id} main odd />
          ))
        }
      </div>
    </main>
  );
}

export default Main;

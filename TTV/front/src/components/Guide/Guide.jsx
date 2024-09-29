import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/Api.js';

function Guide() {
  const { id } = useParams();
  const [guide, setGuide] = useState({});

  useEffect(() => {
    api.getGuide(id)
      .then((res) => setGuide(res));
  }, [id]);

  return (
    <main className="guide">
      <div className="guide__container">
        <img src={guide.photoLink} alt={guide.name} className="guide__image" />
        <div className="guide__text">
          <h2 className="guide__title">
            {guide.name}
          </h2>
          <p className="guide__text">{guide.text}</p>
          <p className="guide__category">
            Категория:
            {' '}
            {guide.category.name}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Guide;

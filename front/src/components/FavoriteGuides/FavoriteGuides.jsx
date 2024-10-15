import React, { useEffect, useState } from 'react';
import GuideCard from '../GuideCard/GuideCard.jsx';
import api from '../../utils/Api.js';

function FavoriteGuides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    api.getGuides()
      .then((res) => setGuides(res.filter((guide) => guide.isLiked)));
  }, []);

  return (
    <section className="favorite-guides">
      <h2 className="favorite-guides__title">
        Мои гиды
      </h2>
      <div className="favorite-guides__container">
        {
          guides.map((guide) => (
            <GuideCard data={guide} key={guide.id} />
          ))
        }
      </div>
    </section>
  );
}

export default FavoriteGuides;

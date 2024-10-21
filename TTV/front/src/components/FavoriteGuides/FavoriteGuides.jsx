import React, { useEffect, useState } from 'react';
import GuideCard from '../GuideCard/GuideCard.jsx';
import api from '../../utils/Api.js';

function FavoriteGuides() {
  const [guides, setGuides] = useState([]);

  function handleLike(data) {
    api.likeGuide({
      ...data,
      isLiked: !data.isLiked,
    })
      // eslint-disable-next-line max-len
      .then((res) => setGuides((state) => state.filter((guide) => res.id !== guide.id)));
  }

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
            // eslint-disable-next-line react/jsx-no-bind
            <GuideCard data={guide} handleLike={handleLike} key={guide.id} />
          ))
        }
      </div>
    </section>
  );
}

export default FavoriteGuides;

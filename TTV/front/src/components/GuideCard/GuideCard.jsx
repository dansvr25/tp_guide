import React from 'react';
import { Link } from 'react-router-dom';

function GuideCard({
  data, handleLike, main, odd, even,
}) {
  return (
    <Link to={`/guides/${data.id}`} className={`${main ? 'guide-card guide-card_main' : 'guide-card'} ${odd ? 'guide-card_odd' : ''} ${even ? 'guide-card_even' : ''}`}>
      <img src={data.photoLink} className="guide-card__image" alt={data.name} />
      <p className="guide-card__title">
        {data.name}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17L17 1" stroke="#E7F3F3" strokeWidth="1.5" strokeMiterlimit="10" />
          <path
            d="M17.0001 13.0426C17.0001 13.0426 13.193 8.18347 17.0001 1C9.81663 4.80714 4.95752 1 4.95752 1"
            stroke="#E7F3F3"
            strokeWidth="1.5"
            strokeLinejoin="bevel"
          />
        </svg>
      </p>
      <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleLike(data); }} className={data.isLiked ? 'guide-card__like-button guide-card__like-button_active' : 'guide-card__like-button'} />
    </Link>
  );
}

export default GuideCard;

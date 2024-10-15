import React, { useEffect, useState } from 'react';
import GuideCard from '../GuideCard/GuideCard.jsx';
import api from '../../utils/Api.js';

function Guides() {
  const [guides, setGuides] = useState([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  function handleInput(e) {
    setSearch(e.target.value);
  }

  function handleFilterOpen() {
    if (isFilterOpen) {
      setIsFilterOpen(false);
      setActiveCategory(0);
    } else {
      setIsFilterOpen(true);
    }
  }

  function handleFilterActivate(categoryId) {
    if (activeCategory === categoryId) {
      setActiveCategory(0);
    } else {
      setActiveCategory(categoryId);
    }
  }

  useEffect(() => {
    if (activeCategory !== 0) {
      api.getGuidesByCategory(activeCategory)
        .then((res) => setGuides(res));
    } else {
      api.getGuides()
        .then((res) => setGuides(res));
    }
  }, [activeCategory]);

  useEffect(() => {
    api.getGuides()
      .then((res) => setGuides(res));
    api.getCategories()
      .then((res) => setCategories(res));
  }, []);

  return (
    <section className="guides">
      <div className="guides__buttons">
        <input className="guides__search" type="text" placeholder="Поиск" value={search} onChange={handleInput} />
        <button type="button" className={`guides__filter ${isFilterOpen && 'guides__filter_active'}`} onClick={handleFilterOpen}>
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="20" width="24" height="6" fill="#E7F3F3" />
            <rect y="10" width="19" height="6" fill="#E7F3F3" />
            <rect width="14" height="6" fill="#E7F3F3" />
          </svg>
          Фильтр
        </button>
        <div className={`guides__filter-container ${isFilterOpen && 'guides__filter-container_active'}`}>
          {
            categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                className={`guides__filter-button ${activeCategory === cat.id && 'guides__filter-button_active'}`}
                onClick={() => handleFilterActivate(cat.id)}
              >
                {cat.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className="guides__container">
        {
          // eslint-disable-next-line max-len
          guides.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((guide) => (
            <GuideCard data={guide} key={guide.id} />
          ))
        }
      </div>
    </section>
  );
}

export default Guides;



import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import foodData from "../assets/data/Menu";
import FoodCart from './FoodCart';

export default function MenuSection() {
  const activeCategory = useSelector(state => state.category.activeCategory);

  // Scroll to active category on load or when changed
  useEffect(() => {
    if (activeCategory) {
      const section = document.querySelector(`[data-category="${activeCategory}"]`);
      console.log("section",section)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="w-full">
      {foodData.menu.map((item) => 
        item.subcategories ? (
          Object.entries(item.subcategories).map(([subcategoryName, subcategoryData], idx) => (
            <div data-category={subcategoryName} key={idx} className="mt-5 scroll-mt-32">
              <h2 className="text-2xl">{subcategoryName}</h2>
              <div className="grid md:grid-cols-3 grid-cols-2  md:gap-5 gap-2 mt-3">
                {subcategoryData.map((data, i) => <FoodCart key={i} item={data} />)}
              </div>
            </div>
          ))
        ) : (
          <div data-category={item.category} key={item.category} className="mt-5 scroll-mt-32">
            <h2 className="text-2xl">{item.category}</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-3">
              {item.items.map((data, i) => <FoodCart key={i} item={data} />)}
            </div>
          </div>
        )
      )}
    </div>
  );
}

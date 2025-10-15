import React from "react";
import { MenuData } from "../assets/data/MenuData";

export default function CategorySidebar() {
  // Extract unique categories
  const uniqueCategories = [...new Set(MenuData.items.map((m) => m.category))];

  return (
    <div className="">
      
      <ul className="space-y-2">
        {uniqueCategories.map((category, index) => (
          <li
            key={index}
            className="  cursor-pointer p-2 rounded-md "
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

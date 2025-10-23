import React, { useState, useRef, useEffect } from 'react';

export default function DropdownFilter({ onFilterChange,setActiveFilter,activeFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Single filter state
  
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const resetFilters = () => {
    setActiveFilter({ type: '', value: '' });
    if (onFilterChange) onFilterChange(null);
  };

  const applyFilter = (type, value) => {
    const newFilter = { type, value };
    setActiveFilter(newFilter);
    if (onFilterChange) onFilterChange(newFilter);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <button
        onClick={resetFilters}
        className="underline text-sm mb-2 block text-left text-white"
      >
        Reset
      </button>

      <button
        onClick={toggleDropdown}
        className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg w-32 text-left"
      >
        Filter {activeFilter.value ? '(1)' : '(0)'}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-64 bg-zinc-900 rounded-2xl shadow-lg p-6 space-y-4 z-10">
          {/* Ingredients */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Ingredients</h4>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="filter"
                value="salmon"
                checked={activeFilter.type === 'ingredients' && activeFilter.value === 'salmon'}
                onChange={() => applyFilter('ingredients', 'salmon')}
                className="accent-fuchsia-600 w-4 h-4 bg-transparent border border-gray-500 rounded-full"
              />
              <span className="text-sm">Salmon</span>
            </label>
          </div>

          <hr className="border-zinc-700" />

          {/* Selection */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Selection</h4>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="filter"
                value="spicy"
                checked={activeFilter.type === 'selection' && activeFilter.value === 'spicy'}
                onChange={() => applyFilter('selection', 'spicy')}
                className="accent-fuchsia-600 w-4 h-4 bg-transparent border border-gray-500 rounded-full"
              />
              <span className="text-sm">Spicy</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer mt-2">
              <input
                type="radio"
                name="filter"
                value="kids"
                checked={activeFilter.type === 'selection' && activeFilter.value === 'kids'}
                onChange={() => applyFilter('selection', 'kids')}
                className="accent-fuchsia-600 w-4 h-4 bg-transparent border border-gray-500 rounded-full"
              />
              <span className="text-sm">Kids</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('priceRange') || '';

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSearchParams((prevParams) => ({
      ...Object.fromEntries(prevParams),
      category: newCategory,
    }));
  };

  const handlePriceRangeChange = (event) => {
    const newPriceRange = event.target.value;
    setSearchParams((prevParams) => ({
      ...Object.fromEntries(prevParams),
      priceRange: newPriceRange,
    }));
  };

  return (
    <div>
      <h1>Filter Page</h1>
      <div>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <input
            type="text"
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
        </label>
      </div>
      <p>Current Category: {category}</p>
      <p>Current Price Range: {priceRange}</p>
    </div>
  );
};

export default FilterPage;

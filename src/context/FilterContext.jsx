// File: src/context/FilterContext.jsx
import React, { createContext, useState } from 'react';

// Create the FilterContext
const FilterContext = createContext();

// Create a Provider component
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('All');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

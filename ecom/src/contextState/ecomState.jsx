import React, { useState } from 'react';
import ecomContext from "./ecomContext";
import { items } from "../components/ItemData";

const EcomState = ({ children }) => {
  // Initialize state with items
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
const x=8;
  return (
    <ecomContext.Provider value={{ filteredProducts, setFilteredProducts ,searchTerm, setSearchTerm, setSearchTerm,x}}>
      {children} 
      
    </ecomContext.Provider>
  );
};

export default EcomState;

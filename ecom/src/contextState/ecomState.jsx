import React, { useState } from 'react';
import ecomContext from "./ecomContext";
import { items } from "../components/ItemData";

const EcomState = ({ children }) => {
  // Initialize state with items
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartArry ,setcartArry]=useState([]);
  const [cartno, setcartno] = useState(0);

const x=8;
  return (
    <ecomContext.Provider value={{  items,  filteredProducts, setFilteredProducts ,
      searchTerm, setSearchTerm,x
      ,cartArry ,setcartArry,
      cartno, setcartno,
    }}>
      {children} 
      
    </ecomContext.Provider>
  );
};

export default EcomState;

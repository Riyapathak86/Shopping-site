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
<<<<<<< HEAD
      searchTerm, setSearchTerm,x
=======
      searchTerm, setSearchTerm, setSearchTerm,x
>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
      ,cartArry ,setcartArry,
      cartno, setcartno,
    }}>
      {children} 
      
    </ecomContext.Provider>
  );
};

export default EcomState;

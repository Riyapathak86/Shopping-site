
import React, { useContext, useState } from "react";
import ItemList from "./ItemList";
import NavFilter from "./NavFilter";
import ecomContext from "../contextState/ecomContext"; 

const Navbar = () => {
  const { filteredProducts, setFilteredProducts } = useContext(ecomContext); 
  const [searchTerm, setSearchTerm] = useState("");

  const searchedProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="nav-bar-wrapper">
        <span>
          E<span style={{ color: "grey" }}>cart</span>
        </span>

        <form className="search-bar">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <span className="cart-icon">0</span>
        </div>
     <div>      
      
    
     </div>
    </div>
  );
};

export default Navbar;

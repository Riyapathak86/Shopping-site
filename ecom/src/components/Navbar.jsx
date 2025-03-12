
import React, { useContext, useState } from "react";
import ItemList from "./ItemList";
import NavFilter from "./NavFilter";
import ecomContext from "../contextState/ecomContext"; 
import Cart from "./Cart";
import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const { filteredProducts, setFilteredProducts,searchTerm, setSearchTerm,cartno} = useContext(ecomContext);

  const searchedProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
const Navigate= useNavigate()
  return (
    <div>
      <div className="nav-bar-wrapper">
        <span onClick={()=>Navigate("/")}>
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

        <span  onClick={()=>Navigate("/cartpage")}>
          <img  className="cartimg"  src="src/images/cartimg.jpeg" alt="" />
          
          <span className="cart-icon">{cartno}</span>
          </span>

        </div>
     <div>      
      
    
     </div>
    </div>
  );
};

export default Navbar;

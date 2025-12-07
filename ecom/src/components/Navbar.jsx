
import React, { useContext, useState } from "react";
import ItemList from "./ItemList";
import NavFilter from "./NavFilter";
import ecomContext from "../contextState/ecomContext"; 
<<<<<<< HEAD
import Cart from "./Cart";
=======
z
>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
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

<<<<<<< HEAD
=======


>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
        </div>
     <div>      
      
    
     </div>
    </div>
  );
};

export default Navbar;

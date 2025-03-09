import React, { useState } from "react";
import ItemList from "./ItemList";
import { useContext } from "react";
import ecomContext from "../contextState/ecomContext";
const NavFilter = () => {
  const { filteredProducts, setFilteredProducts ,searchTerm, setSearchTerm} = useContext(ecomContext);

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(items);
    } else {
      const filtered = items.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const filterByPrice = (price) => {
    const filtered = items.filter((product) => product.price >= price);
    setFilteredProducts(filtered);
  };

  // Apply search filtering safely
  const searchedProducts = filteredProducts.filter(
    (item) => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="nav-bar-filter-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div onClick={() => setFilteredProducts(items)} className="items">
          No Filter
        </div>
        <div onClick={() => filterByCategory("mobiles")} className="items">
          Mobiles
        </div>
        <div onClick={() => filterByCategory("laptops")} className="items">
          Laptops
        </div>
        <div onClick={() => filterByCategory("tablets")} className="items">
          Tablets
        </div>
        <div onClick={() => filterByPrice(29999)} className="items">
          {">="} 29999
        </div>
        <div onClick={() => filterByPrice(49999)} className="items">
          {">="} 49999
        </div>
        <div onClick={() => filterByPrice(69999)} className="items">
          {">="} 69999
        </div>
        <div onClick={() => filterByPrice(89999)} className="items">
          {">="} 89999
        </div>
        <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>

      <ItemList products={searchedProducts} />
    </div>
  );
};

export default NavFilter;

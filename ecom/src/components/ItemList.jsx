import React from "react";
import { Link } from "react-router-dom";
import { items } from "./ItemData";
const ItemList = ({ products = [] }) => { 
  return (
    <div className="card">
      <div className="container card-body">
        {products.map((item) => (
          <div key={item.id} className="product-page">
            <div className="product-image-container">
           
            <Link to={`/items/${item.id}`}>
  <img src={item.imgSrc} alt={item.title} className="product-image" />
</Link>
            </div>

            <div className="product-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-description">{item.description}</p>
              <p className="product-price">₹{item.price}</p>
              <button className="buy-now">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;

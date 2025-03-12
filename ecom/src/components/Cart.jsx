import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ecomContext from "../contextState/ecomContext";

const Cart = () => {
  const { cartArry, setcartArry ,cartno,setcartno} = useContext(ecomContext);

  const removeFromCart = (id) => {
    setcartArry(cartArry.filter((item) => item.id !== id));
    setcartno(cartno-1);
  };

  let totalPrice = 0;
  for (let i = 0; i < cartArry.length; i++) {
    totalPrice += cartArry[i].price;
  }

  let shippingPrice = 50;

  return (
    <div className="card">
      <div className="container card-body">
        {cartArry.length === 0 ? (
          <h2 className="empty-cart">🛒 Your cart is empty</h2>
        ) : (
          <>
            {cartArry.map((item) => (
              <div key={item.id} className="product-page">
                <div className="product-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <h2 className="product-title">{item.name}</h2>
                  <p className="product-description">{item.description}</p>
                  <p className="product-price">₹{item.price}</p>
                  <div className="cart-quantity">
                    <button className="decrease">-</button>
                    <span className="quantity"></span>
                    <button className="increase">+</button>
                  </div>
                  <button
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {cartArry.length > 0 && (
        <div className="bill-container">
          <h5 className="bill-title">Bill Details</h5>
          <hr />
          <h2 className="bill-price">Product Price ₹{totalPrice}</h2>
          <h3 className="bill-shipping">Shipping Charge ₹{shippingPrice}</h3>
          <h4 className="bill-total">TOTAL ₹{totalPrice + shippingPrice}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;

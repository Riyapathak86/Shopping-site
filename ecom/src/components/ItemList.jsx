import React from "react";
import { Link } from "react-router-dom";
import { items } from "./ItemData";
import { useContext } from "react";
import ecomContext from "../contextState/ecomContext";

const ItemList = ({ products = [] }) => {
  const { setcartArry ,cartno, setcartno} = useContext(ecomContext); 


  const handleCartClick = (img,title,price,id) => {

    setcartArry(praevdata=>{ 
      return [...praevdata,
        {
          image:img,
          name:title,
           price:price,
          id:id,
        }
      ]
    
    })
   
    setcartno(prev => prev + 1);
 
  };


  return (
    <div className="card">
      <div className="container card-body">
        {products.map((item) => (
          <div key={item.id} className="product-page">
            <div className="product-image-container">
              <Link to={`/items/${item.id}`}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="product-image"
                />
              </Link>
            </div>

            <div className="product-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-description">{item.description}</p>
              <p className="product-price">₹{item.price}</p>

              <button onClick={()=>handleCartClick (item.imgSrc,item.title,item.price,item.id) } className="buy-now">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;

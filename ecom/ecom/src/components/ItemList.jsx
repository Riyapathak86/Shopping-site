import React from "react";
import { Link } from "react-router-dom";
import { items } from "./ItemData";
import { useContext } from "react";
import ecomContext from "../contextState/ecomContext";

const ItemList = ({ products = [] }) => {
  const { setcartArry ,cartno, setcartno} = useContext(ecomContext); 
<<<<<<< HEAD


=======
>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
  const handleCartClick = (img,title,price,id) => {

    setcartArry(praevdata=>{ 
      return [...praevdata,
        {
          image:img,
          name:title,
<<<<<<< HEAD
           price:price,
=======
          price:price,
>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
          id:id,
        }
      ]
    
    })
   
<<<<<<< HEAD
    setcartno(prev => prev + 1);
=======
   
    setcartno(cartno+1);
>>>>>>> 6403659a0bcddfe866833c7b572ff8200ffe4ace
 
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

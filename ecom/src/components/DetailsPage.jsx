import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ecomContext from "../contextState/ecomContext";

export const DetailsPage = () => {
  const { filteredProducts } = useContext(ecomContext); 
  const { id } = useParams();
  const productId = Number(id);


  const detailed = filteredProducts.filter((p) => p.id === productId);
  if (detailed.length === 0) {
    return <p>Product not found</p>;
  }


  const related = filteredProducts.filter(
    (p) => p.category === detailed[0].category && p.id !== productId
  );

  return (
    <div className="detailedcontainer">
      <div className="center">
        <h2>Product Details</h2>
        <ItemList products={detailed} />
    
      </div>
      <h3>Related Products</h3>
      <ItemList products={related} />
    </div>
  );
};

export default DetailsPage;

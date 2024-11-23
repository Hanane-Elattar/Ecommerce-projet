import React from "react";
import { useNavigate } from "react-router-dom";
import './category.css'; 

const CategoryMarque = ({ products = [], categorymarque }) => {
  const navigate = useNavigate(); // Make sure to call useNavigate to initialize the navigate function

  const filteredProducts = products.filter(
    (product) => product.categorymarque === categorymarque
  );

  const handleProductClick = (productId) => {
    // Correct string interpolation using backticks
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2 className="titre">MARQUES  {categorymarque.toUpperCase()}</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
              <img 
                src={product.image} 
                alt={product.titre} 
                className="product-image"
              />
              <h3 className="product-title">{product.titre}</h3>
              <p className="product-price">{product.price} MAD</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default CategoryMarque;

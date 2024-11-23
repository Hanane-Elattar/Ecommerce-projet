import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './category.css';

const Category = ({ products = [], category }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook to programmatically navigate

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleProductClick = (productId) => {
    // Navigate to ProductDetails page and pass the productId as a parameter
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-grid">
      <h2 className="titre">PARFUMS - {category.toUpperCase()}</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)} // Add click handler to navigate
            >
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

export default Category;

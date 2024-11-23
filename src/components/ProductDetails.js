import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ products, onAddToCart }) => {
  console.log("Received products:", products); // Debug log
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  useEffect(() => {
    if (showAlert) {
      // Hide the alert after 3 seconds
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [showAlert]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowAlert(true); // Show the alert when a product is added
  };

  return (
    <div className="product-details">
     {showAlert && (
      <div className="alert-box">
        <i className="fas fa-check-circle success-icon"></i>
        Product added to cart successfully!
      </div>
    )}
      <div className="product-details-image">
        <img src={product.image} alt={product.titre} />
      </div>
      <div className="product-details-info">
        <h1>{product.titre}</h1>
        <p className="product-price">{product.price} MAD</p>

        <h3>NOTES OLFACTIVES</h3>
        <ul className="olfactive-notes">
          <li><strong>Notes de tête:</strong> {product.notes.tete}</li>
          <li><strong>Notes de cœur:</strong> {product.notes.coeur}</li>
          <li><strong>Notes de fond:</strong> {product.notes.fond}</li>
        </ul>

        <div className="quantity-and-buttons">
          <div className="quantity-selector">
            <button onClick={decrementQuantity}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-button" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

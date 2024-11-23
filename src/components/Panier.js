import React, { useState } from 'react';
import './panier.css';

function Panier({ cart, onRemoveFromCart, onUpdateQuantity }) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (!cart || cart.length === 0) {
    return <div className="empty-cart-message">Votre panier est vide.</div>;
  }

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(productId, newQuantity);
  };

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };

  const closeCheckoutForm = () => {
    setShowCheckoutForm(false);
  };

  return (
    <div className="panier-container">
      <h1>Votre Panier</h1>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.titre} className="cart-item-image" />
          <h3>{product.titre}</h3>
          <p>{product.price} MAD</p>

          <div className="quantity-container">
            <button
              onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
            <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
          </div>

          <button onClick={() => onRemoveFromCart(product.id)} className="remove-button">Supprimer</button>
        </div>
      ))}

      <h3 className="total-price">Total: {totalPrice.toFixed(2)} MAD</h3>

      <button className="checkout-button" onClick={handleCheckoutClick}>Passer à la caisse</button>

      {/* Modal for the payment form */}
      {showCheckoutForm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-button" onClick={closeCheckoutForm}>X</button>
            <PaymentForm />
          </div>
        </div>
      )}
    </div>
  );
}

// Payment form component
function PaymentForm() {
  return (
    <div className="payment-form">
      <h2>Paiement</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" placeholder="Entrez votre nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Entrez votre email" required />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de carte</label>
          <input type="text" id="cardNumber" placeholder="Entrez votre numéro de carte" required />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Date d'expiration</label>
          <input type="text" id="expiryDate" placeholder="MM/AA" required />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="Entrez le CVV" required />
        </div>

        <button type="submit" className="submit-button">Payer</button>
      </form>
    </div>
  );
}

export default Panier;

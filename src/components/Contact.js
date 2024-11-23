import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    
    <div className="contact-page">
      <h1>Contactez Nous</h1>
      <hr/>
      {showAlert && (
      <div className="alert-box">
        <i className="fas fa-check-circle success-icon"></i>
        Message sent successfully!
      </div>
    )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom et Prénom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Votre email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;

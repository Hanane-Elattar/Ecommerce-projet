import React from 'react';
import './footer.css';
import perfumeImage from '../assets/swiss.png';
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={perfumeImage} alt="Logo" className="footer-logo" />
          <p>
            Arabian Essence est une parfumerie en ligne qui met à la disposition des adeptes des
            bonnes senteurs un service soigné, une assistance olfactive personnalisée et des parfums
            authentiques.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Nos Collections</h4>
          <ul>
            <li><a href="/parfums/homme">Parfum Pour Homme</a></li>
            <li><a href="/parfums/femme">Parfum Pour Femme</a></li>
            <li><a href="/parfums/unisex">Parfum Pour Unisexe</a></li>
          </ul>
        </div>

        <div className="footer-section terms">
          <h4>Termes de service</h4>
          <ul>
            <li><a href="Condition">Conditions Générales de Vente</a></li>
            <li><a href="retour">Retour</a></li>
            <li><a href="blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Nous Contacter</h4>
          <p className='p1'>Tel: +212 612-345678</p>
          <p className='p1'>Adresse: Rue des Roses, Casablanca</p>
          <div className="social-links">
            <a href="https://www.facebook.com/swissarabianfrance"><FaFacebook /></a>
            <a href="https://www.instagram.com/swissarabianperfumes/"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@swissarabianperfume"><FaTiktok /></a>
          </div>
        </div>
      </div>
      <p className='copy'>Copyright © 2024, Arabian Essence. <br/>
      Tous droits réservés Consultez nos conditions d'utilisation et notre avis de confidentialité.</p>
    </footer>
  );
}

export default Footer;






















import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-image">
        <img src='https://www.swissarabian.ma/wp-content/uploads/2023/12/collection-heritage.webp' alt="Hero Parfum" />
      </div>
      {/* <div className="hero-text">
        <h1>Explorez nos <br /> Parfums Unisexes</h1>
        <p>Découvrez nos parfums unisexes, une harmonie olfactive envoûtante. Des notes orientales aux touches citronnées, chaque essence offre une expérience sensorielle sans distinction de genre.</p>
      </div> */}

      <div className="collection-section">
        <h2 className="collection-title">Nos Collections</h2>
        <hr className="divider" />
        <p>
        Découvrez nos collections de parfums exclusifs pour hommes, femmes et unisexes. Chaque fragrance est soigneusement sélectionnée pour vous offrir une expérience olfactive unique.
        </p>
        <div className="collection-grid">

          <div className="collection-card" onClick={() => window.location.href = '/parfums/homme'}>
            <img 
              src="https://parfumstore.ma/wp-content/uploads/2024/11/Infini-Elixir-Maison-Alhambra-pour-homme-et-femme-Prix-Maroc.webp" 
              alt="Collection Homme" 
              className="collection-image" 
            />
            <h3 className="collection-subtitle">Parfum Homme</h3>
          </div>

          <div className="collection-card" onClick={() => window.location.href = '/parfums/femme'}>
            <img 
              src="https://parfumstore.ma/wp-content/uploads/2024/04/glacier-bella-maison-alhambra-430x430.webp" 
              alt="Collection Femme" 
              className="collection-image" 
            />
            <h3 className="collection-subtitle">Parfum Femme</h3>
          </div>

          <div className="collection-card" onClick={() => window.location.href = '/parfums/unisex'}>
            <img 
              src="https://parfumstore.ma/wp-content/uploads/2024/04/hayaati-al-maleky-lattafa-430x430.webp" 
              alt="Collection Unisex" 
              className="collection-image" 
            />
            <h3 className="collection-subtitle">Parfum Unisex</h3>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://media.al-jasser.com/api/public/content/4ifxy19ussokrhlguhuxg-hero?v=a1f79dda" />
      </div>
      <div className="collection-section">
        <h2 className="collection-title">NOUVEAUTÉS PARFUMS</h2>
        <hr className="divider" />
      </div>
    </section>
  );
};

export default HeroSection;

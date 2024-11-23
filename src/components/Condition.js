import React from 'react';
import './condition.css';

function Condition() {
  return (
    <div className="conditions-page">
      <h1>Conditions Générales de Vente</h1><hr/>
      <div className="conditions-content">
        <section>
          <h4>1. Introduction</h4>
          <p>
            Les présentes conditions générales de vente s'appliquent à toutes les ventes de produits et services réalisés
            par notre société. En passant une commande, vous acceptez ces conditions dans leur intégralité.
          </p>
        </section>

        <section>
          <h4>2. Produits</h4>
          <p>
            Nous nous efforçons de présenter les informations relatives à nos produits de manière exacte et détaillée. 
            Cependant, des erreurs peuvent survenir.
          </p>
        </section>

        <section>
          <h4>3. Commandes</h4>
          <p>
            Toute commande passée sur notre site est soumise à notre confirmation. La commande devient définitive lorsque
            vous recevez un e-mail de confirmation.
          </p>
        </section>

        <section>
          <h4>4. Livraison</h4>
          <p>
            Les délais de livraison sont indiqués à titre indicatif. Ils peuvent varier en fonction de la disponibilité des
            produits et des conditions de transport.
          </p>
        </section>

        <section>
          <h4>5. Prix des produits</h4>
          <p>
            Les prix des produits sont indiqués en euros et incluent toutes les taxes applicables. Nous nous réservons le
            droit de modifier les prix à tout moment.
          </p>
        </section>

        <section>
          <h4>6. Retour et Remboursement</h4>
          <p>
            En cas de non-satisfaction, vous avez le droit de retourner les produits dans un délai de 14 jours à compter de
            la réception de la commande, conformément à la législation en vigueur.
          </p>
        </section>

        <section>
          <h4>7. Responsabilité</h4>
          <p>
            Nous ne pouvons être tenus responsables des dommages indirects résultant de l’utilisation de nos produits ou
            services.
          </p>
        </section>

        <section>
          <h4>8. Loi Applicable</h4>
          <p>
            Ces conditions sont régies par la législation française. Tout litige sera soumis aux tribunaux compétents.
          </p>
        </section>

        <section>
          <h4>9. Modification des Conditions</h4>
          <p>
            Nous nous réservons le droit de modifier ces conditions générales de vente à tout moment, sans préavis.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Condition;

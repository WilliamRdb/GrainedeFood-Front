import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './styles.scss';

const SellingPoints = () => (
  <>
    <h2 className="text-align-center">Comment ça marche, Graine de Food?</h2>
    <div className="homepage__selling-points">
      <div className="centered homepage__selling-points--item">
        <Icon name='computer' size='huge' />
        <h3 className="text-align-center h3">Je m'abonne</h3>
        <p className="text-align-center">Je choisis ma formule<br/>1 mois, 3 mois ou 6 mois</p>
      </div>
      <div className="centered homepage__selling-points--item">
        <Icon name='box' size='huge' />
        <h3 className="text-align-center h3">Je reçois ma box</h3>
        <p className="text-align-center">Directement à la maison<br/>en début de mois</p>
      </div>
      <div className="centered homepage__selling-points--item">
        <Icon name='food' size='huge' />
        <h3 className="text-align-center h3">Je déguste</h3>
        <p className="text-align-center">Je découvre des produits <br/>français de qualité</p>
      </div>
    </div>
    <Link to='/abonnement'><button>Je m'abonne à la box Graine de Food</button></Link>

  </>
);

export default SellingPoints;

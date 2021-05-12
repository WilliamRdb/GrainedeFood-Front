import React from 'react';
import {Link} from 'react-router-dom';

const ButtonAbonne = () => (

  <Link to='/abonnement/paiement' className='aboButton'>
    <button>Je m'abonne</button>
  </Link>
);

export default ButtonAbonne;

import React from 'react'
import logo from 'src/assets/images/Logo_grainedefood.png';
import './styles.scss';

const PaymentConfirm = () => (
  <div className="paymentConfirm">
    <h1 className="paymentConfirm__header" >Merci de Votre Commande</h1>
    <p>Vous allez recevoir par email une confirmation</p>
    <p>Bonne dégustation ! </p>
    <p>L'équipe Graine de Food </p> 
    <div className="paymentConfirm__logo">
      <img className="header__logo__img" src={logo} alt="logo de Grainedefood"></img>
    </div>
    <a href='/'><button>Retour à l'accueil</button></a>
  </div>
)

export default PaymentConfirm

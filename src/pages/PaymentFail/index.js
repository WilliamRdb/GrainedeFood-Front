import React from 'react'
import {   Link } from 'react-router-dom';
import logo from 'src/assets/images/Logo_grainedefood.png';
import './styles.scss';
import { Button } from 'semantic-ui-react'

const PaymentFail = () => (
  <div className="paymentConfirm">
    <h1 className="paymentConfirm__header" >Merci de Votre Commande</h1>
    <p>Malheureusement, le paiement n'a pas aboutit.</p>
    <p>Veuillez tenter à nouveau ou contacter votre banque svp. </p>
    <p>L'équipe Graine de Food </p> 
     <div className="paymentConfirm__logo">
                <img className="header__logo__img" src={logo} alt="logo de Grainedefood"></img>
    </div>
    <Button as={Link} to='/'><div>Retour à l'accueil</div></Button>
  </div>
)

export default PaymentFail;

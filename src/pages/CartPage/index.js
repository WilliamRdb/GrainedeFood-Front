// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Checkbox, Button, Icon } from 'semantic-ui-react'
import CartResume from 'src/containers/CartResume';
import DeliveryFormConfirm from 'src/containers/DeliveryFormConfirm';
import NavFormule from 'src/pages/CartPage/NavFormule';
import Checkout from 'src/pages/CartPage/StripePay';
// import ModalTest from 'src/pages/CartPage/ModalTest';
import ModalSem from 'src/pages/CartPage/ModalSem';
import { StripeProvider, Elements, Stripe } from 'react-stripe-elements';
import pjson from '../../../package.json';


// Stripe imports
import {CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//const stripePromise = loadStripe('pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE');

// == Composant
const CartPage = () => {

  return (
    <div className="cartpage">
      <h1 className="cartpage__header" >Récapitulatif de Votre Commande </h1>
      <a className='button-link' href='/abonnement'><button>Changer de formule</button></a>
      <NavFormule />
      <DeliveryFormConfirm />
      <Checkbox className="checkboxCGV" label="J'ai lu et j'accepte les conditions générales de vente" />
      <div className="cartpage__button"> 
        <StripeProvider apiKey='pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE'>
            <Elements>
              {/* <ModalTest /> */}
              <ModalSem />
            </Elements>
        </StripeProvider>


      {/* <Link to="/abonnement/commande-validee">         
        <Button icon labelPosition='right'>
          Paiement
        </Button> 
      </Link> */}
     </div>
  </div>

  );
}

export default CartPage;

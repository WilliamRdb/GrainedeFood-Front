import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Checkbox, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import api from 'src/api';
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";
import TestPayement from 'src/containers/TestPayement';

import {Elements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

toast.configure();
// const stripePromise=loadStripe('pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE');

/*const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  
  }  
};*/

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

function ModalTest(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

// const [product] = React.useState({
//     name: "Tesla Roadster",
//     price: 64998.67,
//     description: "Cool car"
//   });

//   async function handleToken(token, addresses) {
//     const response = await axios.post(
//       "https://ry7v05l6on.sse.codesandbox.io/checkout",
//       { token, product }
//     );
//     const { status } = response.data;
//     console.log("Response:", response.data);
//     if (status === "success") {
//       toast("Success! Check email for details", { type: "success" });
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//   }

// const handleOnSubmit = (e) => {
//     e.preventDefault();
//   }

    return (
      <div>
        <Button icon onClick={openModal} labelPosition='right'>
        Paiement
        <Icon name='paypal' />
        </Button> 
     
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          //style={customStyles}
          contentLabel="Example Modal"
          className="modal_pay"
        >

         
          <button onClick={closeModal}>close</button>
          <TestPayement />
            {/* <div className="product">
              <h1>{product.name}</h1>
              <h3>Abonnement Box X mois · €{product.price}</h3>
            </div>
        
          <form onSubmit={handleOnSubmit}>
      <StripeCheckout
        //stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
          </form> */}


        </Modal>
      </div>
    );
}

export default ModalTest;

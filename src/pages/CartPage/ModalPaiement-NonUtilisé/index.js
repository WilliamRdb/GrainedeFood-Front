import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Checkbox, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

import TestPayement from 'src/containers/TestPayement';


import {Elements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise=loadStripe('pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE');

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

function ModalPaiement(){
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
        </Modal>
      </div>
    );
}

export default ModalPaiement;

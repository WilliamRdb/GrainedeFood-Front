import React, { useState } from 'react';
import StripeContainer from 'src/pages/CartPage/TestPayement/StripeContainer/StripeContainer';

const TestPayement = ({selectedSubPrice, selectedSubMonth, finalPrice}) => {
    const [showItem, setShowItem] = useState(false)
    return (
      <>
        <h2>Box GrainedeFood - {selectedSubMonth}</h2>
        {showItem ? <StripeContainer/> : <> <p>montant total TTC à régler : <span>{finalPrice}€</span></p> 
        <button onClick={() => setShowItem(true)}>Payer</button></>}
      </>
    );
  }

export default TestPayement;

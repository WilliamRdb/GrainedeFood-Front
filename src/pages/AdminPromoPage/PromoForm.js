import React, { useEffect, useState } from 'react';

import { Button, Form } from 'semantic-ui-react'
import './styles.scss';
import api from 'src/api';


const PromoForm = () => {

const [ newPromo, setNewPromo ] = useState([])

const handleSubmit = (event) => {  
    event.preventDefault();
    api.post('/promo', newPromo)
    .then((response) => response.data.promo)
    .then(() => window.location.reload())
    .catch((error) => console.error(error))
    };

/*console.log(promosData)*/
console.log(newPromo)

  return (
    <Form className="promo-form" onSubmit={handleSubmit}>
      <Form.Field>
        <input 
          placeholder='Code'
          value={newPromo.code}
          onChange={(e) => setNewPromo({...newPromo, "code": e.target.value})} 
         />
      </Form.Field>
      <Form.Field>
        <input 
          placeholder='%' 
          value={newPromo.pourcent}
          onChange={(e) => setNewPromo({...newPromo, "pourcent": parseInt(e.target.value, 10)})} 
        />
      </Form.Field>
      <Form.Field>
        <input 
          placeholder='Date de début' 
          type='date'
          value={newPromo.start_date}
          onChange={(e) => setNewPromo({...newPromo, "start_date": e.target.value})} 
          />
      </Form.Field>
      <Form.Field>
        <input 
          placeholder='Date de fin' 
          type='date'
          value={newPromo.end_date}
          onChange={(e) => setNewPromo({...newPromo, "end_date": e.target.value})}            
          />
      </Form.Field>
      <Button type='submit' color='green'>Enregistrer le code promo</Button>
    </Form>
  )
}

export default PromoForm;

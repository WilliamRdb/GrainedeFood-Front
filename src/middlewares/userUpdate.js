import api from 'src/api'
import {
    SUBMIT_UPDATE,
} from 'src/actions/userUpdate';

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_UPDATE: {
         const { email, password, lastname, firstname, invoiceAddress, invoicePostCode, invoiceCity, deliveryAddress, deliveryPostCode, deliveryCity, id } = store.getState();
        api.put(`/user/${id}`, { 
           id:id,
           email: email,
           password: password,
           last_name: lastname,
           first_name: firstname,
           invoice_address: invoiceAddress,
           invoice_postcode: invoicePostCode,
           invoice_city: invoiceCity,
           delivery_address: deliveryAddress,  
           delivery_postcode: deliveryPostCode,
           delivery_city: deliveryCity,
        }).catch((err)=> console.log('error: ', err)
        )
          
 return next(action);
}
default:
return next(action);
 }
};

import api from 'src/api'
import {
    SUBMIT_SIGNUP,

} from 'src/actions/register';
import {
    setUserFromApi,
} from 'src/actions/user';
import {
    logged
} from 'src/actions/user'

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_SIGNUP: {
         const { emailSignup, passwordSignup, lastnameSignup, firstnameSignup, invoiceAddressSignup, invoicePostCodeSignup, invoiceCitySignup, deliveryAddressSignup, deliveryPostCodeSignup, deliveryCitySignup, vegan  } = store.getState();
        api.post('/signup', {
           email: emailSignup,
           password: passwordSignup,
           last_name: lastnameSignup,
           first_name: firstnameSignup,
           invoice_address: invoiceAddressSignup,
           invoice_postcode: invoicePostCodeSignup,
           invoice_city: invoiceCitySignup,
           delivery_address: deliveryAddressSignup,  
           delivery_postcode: deliveryPostCodeSignup,
           delivery_city: deliveryCitySignup,
           vegan: vegan,
        }).catch((err)=> console.log('error: ', err)
        )
            .then(result => store.dispatch(setUserFromApi(
                result.data.user.email, 
                result.data.user.password, 
                result.data.user.last_name, 
                result.data.user.first_name, 
                result.data.user.invoice_address, 
                result.data.user.invoice_postcode, 
                result.data.user.invoice_city, 
                result.data.user.delivery_address, 
                result.data.user.delivery_postcode, 
                result.data.user.delivery_city, 
                result.data.user.role, 
                result.data.user.vegan, 
                result.data.user.id, 
                null, 
                null, 
            )))
            .then(() => {
           store.dispatch(logged())
       })
 return next(action);
}
default:
return next(action);
 }
};

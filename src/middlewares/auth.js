import React from 'react';
import {Redirect} from 'react-router-dom'
import api from 'src/api'
import {
    SUBMIT_LOGIN,
    setUserFromApi,
    logged,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_LOGIN: {
         const { emailSignin, passwordSignin } = store.getState();
        api.post('/login', {
           email: emailSignin,
           password: passwordSignin,
        }).catch((err)=> alert("Données saisies non reconnues, merci d'essayer à nouveau ou créer un nouveau compte")
        )            
            .then(result =>{
                console.log(result.data.user);
                if(result.data.user) {
                    if(result.data.user.orders.length === 0) {
                        store.dispatch(setUserFromApi(
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
                            null
                        ))} 
                        else {
                            store.dispatch(setUserFromApi(
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
                                result.data.user.orders[0].start_subscribe,
                                result.data.user.orders[0].end_subscribe  
                            ))
                        }
            } else {
                    alert("Données saisies non reconnues, merci d'essayer à nouveau ou créer un nouveau compte")
                    next()
                }
            })

            .then(() => {
                store.dispatch(logged())
            })

 return next(action);
}
default:
return next(action);
 }
};

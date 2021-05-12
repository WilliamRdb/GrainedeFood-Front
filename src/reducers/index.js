import {
    SET_EMAIL_SIGNIN,
    SET_PASSWORD_SIGNIN,
    SET_USER_FROM_API,
    RESET_FIELD,
    LOGGED,
    LOGOUT,
} from 'src/actions/user';
import {
    SET_EMAIL_SIGNUP,
    SET_PASSWORD_SIGNUP,
    SET_LASTNAME_SIGNUP,
    SET_FIRSTNAME_SIGNUP,
    SET_INVOICE_ADDRESS_SIGNUP,
    SET_INVOICE_POSTCODE_SIGNUP,
    SET_INVOICE_CITY_SIGNUP,
    SET_DELIVERY_ADDRESS_SIGNUP,
    SET_DELIVERY_POSTCODE_SIGNUP,
    SET_DELIVERY_CITY_SIGNUP,
    SET_NEW_USER_FROM_API,
    SET_PASSWORD_CONFIRM_SIGNUP,
    SET_CHECKED_VEGAN
} from 'src/actions/register';

import {
    SET_EMAIL_UPDATE,
    SET_LASTNAME_UPDATE,
    SET_FIRSTNAME_UPDATE,
    SET_INVOICE_ADDRESS_UPDATE,
    SET_INVOICE_POSTCODE_UPDATE,
    SET_INVOICE_CITY_UPDATE,
    SET_DELIVERY_ADDRESS_UPDATE,
    SET_DELIVERY_POSTCODE_UPDATE,
    SET_DELIVERY_CITY_UPDATE,
} from 'src/actions/userUpdate';

import {
  SET_NEW_PROMO_CODE,
  SET_NEW_PROMO_POURCENT,
  SET_NEW_PROMO_START_DATE,
  SET_NEW_PROMO_END_DATE,
  MODIFY_CODE_PROMO,
} from 'src/actions/admin';

import {
    SET_SUB_ONE_MONTH,
    SET_SUB_THREE_MONTH,
    SET_SUB_SIX_MONTH,
    SET_FINAL_PRICE,
    SET_START_DATE,
    SET_END_DATE,
} from 'src/actions/subscribe';

const initialState = {
    //Signin
    emailSignin: '',
    passwordSignin: '',
    //Singup
    emailSignup: '',
    passwordSignup: '',
    passwordConfirmSignup: '', 
    lastnameSignup: '',
    firstnameSignup: '',
    invoiceAddressSignup: '',
    invoicePostCodeSignup: '',
    invoiceCitySignup: '',
    deliveryAddressSignup: '',
    deliveryPostCodeSignup: '',
    deliveryCitySignup: '',
    //info user
    email: '',
    password: '',
    lastname: '',
    firstname: '',
    invoiceAddress: '',
    invoicePostCode: '',
    invoiceCity: '',
    deliveryAddress: '',  
    deliveryPostCode: '',
    deliveryCity: '',
    role: '',
    vegan: 0,
    id: '',
    orderStartDate: '', 
    orderEndDate: '',
    logged: false,
    //selected subscription
    selectedSubMonth: '1 mois',
    selectedSubPrice: '29,99',
    finalPrice: '', 
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        // SIGNIN
        case SET_EMAIL_SIGNIN:            
            return {
                ...state,
                emailSignin: action.email,
            }
        case SET_PASSWORD_SIGNIN:
            return {
                ...state,
                passwordSignin: action.password,
            }
        case SET_USER_FROM_API:
            return {
                ...state,
                email: action.email,
                password: action.password,
                lastname: action.lastname,
                firstname: action.firstname,
                invoiceAddress: action.invoiceAddress,
                invoicePostCode: action.invoicePostCode,
                invoiceCity: action.invoiceCity,
                deliveryAddress: action.deliveryAddress,  
                deliveryPostCode: action.deliveryPostCode,
                deliveryCity: action.deliveryCity,
                role: action.role,
                vegan: action.checkedVegan,
                id: action.id,
                orderStartDate: action.orderStartDate,
                orderEndDate: action.orderEndDate
            }
        // SIGNUP
        case SET_EMAIL_SIGNUP:
            return {
                ...state,
                emailSignup: action.email,
            }
        case SET_PASSWORD_SIGNUP:
            return {
                ...state,
                passwordSignup: action.password,
            }
        case SET_PASSWORD_CONFIRM_SIGNUP:
            return {
                ...state,
                passwordConfirmSignup: action.passwordConfirm,
            }
        case SET_LASTNAME_SIGNUP:
            return {
                ...state,
                lastnameSignup: action.lastname,
            }
        case SET_FIRSTNAME_SIGNUP:
            return {
                ...state,
                firstnameSignup: action.firstname,
            }
        case SET_INVOICE_ADDRESS_SIGNUP:
            return {
                ...state,
                invoiceAddressSignup: action.invoiceAddress,
            }
        case SET_INVOICE_POSTCODE_SIGNUP:
        return {
            ...state,
            invoicePostCodeSignup: action.invoicePostCode,
        }
        case SET_INVOICE_CITY_SIGNUP:
        return {
            ...state,
            invoiceCitySignup: action.invoiceCity,
        }
        case SET_DELIVERY_ADDRESS_SIGNUP:
            return {
                ...state,
                deliveryAddressSignup: action.deliveryAddress,
            }
        case SET_DELIVERY_POSTCODE_SIGNUP:
            return {
                ...state,
                deliveryPostCodeSignup: action.deliveryPostCode,
            }
        case SET_DELIVERY_CITY_SIGNUP:
            return {
                ...state,
                deliveryCitySignup: action.deliveryCity,
            }
        case SET_CHECKED_VEGAN:
            return {
                ...state,
                vegan: action.vegan,
            }
        case SET_NEW_USER_FROM_API:
            return {
                ...state,
                emailSignup: action.email,
                passwordSignup: action.password, 
                lastnameSignup: action.lastname,
                firstnameSignup: action.firsname,
                invoiceAddressSignup: action.invoiceAddress,
                invoicePostCodeSignup: action.invoicePostCode,
                invoiceCitySignup: action.invoiceCity,
                deliveryAddressSignup: action.deliveryAddress,
                deliveryPostCodeSignup: action.deliveryPostCode,
                deliveryCitySignup: action.deliveryCity,
                id: action.id,
            }

        // RESET FIELD
        case RESET_FIELD:
            return {
                ...state,
                emailSignin: '',
                passwordSignin: '',
                emailSignup: '',
                passwordSignup: '',
                passwordConfirmSignup: '', 
            }
            // CONNECTION
        case LOGGED:
            return {
                ...state,                
                logged: true, 
            }
            // DISCONNECT
        case LOGOUT:
            return {
                ...state,                
                logged: false,
                emailSignup: '',
                passwordSignup: '',
                passwordConfirmSignup: '', 
                lastnameSignup: '',
                firstnameSignup: '',
                invoiceAddressSignup: '',
                invoicePostCodeSignup: '',
                invoiceCitySignup: '',
                deliveryAddressSignup: '',
                deliveryPostCodeSignup: '',
                deliveryCitySignup: '',
                //info user
                email: '',
                password: '',
                lastname: '',
                firstname: '',
                invoiceAddress: '',
                invoicePostCode: '',
                invoiceCity: '',
                deliveryAddress: '',  
                deliveryPostCode: '',
                deliveryCity: '',
                role: '',
                vegan: 0,
                id: '',
                orderStartDate: '', 
                orderEndDate: '', 
            }


        // USER UPDATE
         // SIGNUP
         case SET_EMAIL_UPDATE:
            return {
                ...state,
                email: action.email,
            }
        case SET_LASTNAME_UPDATE:
            return {
                ...state,
                lastname: action.lastname,
            }
        case SET_FIRSTNAME_UPDATE:
            return {
                ...state,
                firstname: action.firstname,
            }
        case SET_INVOICE_ADDRESS_UPDATE:
            return {
                ...state,
                invoiceAddress: action.invoiceAddress,
            }
        case SET_INVOICE_POSTCODE_UPDATE:
        return {
            ...state,
            invoicePostCode: action.invoicePostCode,
        }
        case SET_INVOICE_CITY_UPDATE:
        return {
            ...state,
            invoiceCity: action.invoiceCity,
        }
        case SET_DELIVERY_ADDRESS_UPDATE:
            return {
                ...state,
                deliveryAddress: action.deliveryAddress,
            }
        case SET_DELIVERY_POSTCODE_UPDATE:
            return {
                ...state,
                deliveryPostCode: action.deliveryPostCode,
            }
        case SET_DELIVERY_CITY_UPDATE:
            return {
                ...state,
                deliveryCity: action.deliveryCity,
            }
            
        // SELECT SUBSCRIPTION
        case SET_SUB_ONE_MONTH:
            return {
                ...state,
                selectedSubMonth: '1 mois',
                selectedSubPrice: '29.99'
            }
        case SET_SUB_THREE_MONTH:
            return {
                ...state,
                selectedSubMonth: '3 mois',
                selectedSubPrice: '49.99'
            }        
        case SET_SUB_SIX_MONTH:
            return {
                ...state,
                selectedSubMonth: '6 mois',
                selectedSubPrice: '69.99'
            }
        case SET_FINAL_PRICE:
        return {
            ...state,
            finalPrice: action.finalPrice
        }
        case SET_START_DATE:
        return {
            ...state,
            orderStartDate: action.orderStartDate, 
        }
        case SET_END_DATE:
        return {
            ...state,
            orderEndDate: action.orderEndDate,
        }
        default:
            return state;
    }
};

export const SET_EMAIL_SIGNUP = 'SET_EMAIL_SIGNUP';

export const setEmailSignup = (email) => ({
  type: SET_EMAIL_SIGNUP,
  email,
});

export const SET_PASSWORD_SIGNUP = 'SET_PASSWORD_SIGNUP';

export const setPasswordSignup = (password) => ({
  type: SET_PASSWORD_SIGNUP,
  password,
});

export const SET_PASSWORD_CONFIRM_SIGNUP = 'SET_PASSWORD_CONFIRM_SIGNUP';

export const setPasswordConfirmSignup = (passwordConfirm) => ({
  type: SET_PASSWORD_CONFIRM_SIGNUP,
  passwordConfirm,
});

export const SET_LASTNAME_SIGNUP = 'SET_LASTNAME_SIGNUP';

export const setLastnameSignup = (lastname) => ({
  type: SET_LASTNAME_SIGNUP,
  lastname,
});

export const SET_FIRSTNAME_SIGNUP = 'SET_FIRSTNAME_SIGNUP';

export const setFirstnameSignup = (firstname) => ({
  type: SET_FIRSTNAME_SIGNUP,
  firstname,
});

export const SET_INVOICE_ADDRESS_SIGNUP = 'SET_INVOICE_ADDRESS_SIGNUP';

export const setInvoiceAddressSignup = (invoiceAddress) => ({
  type: SET_INVOICE_ADDRESS_SIGNUP,
  invoiceAddress,
});

export const SET_INVOICE_POSTCODE_SIGNUP = 'SET_INVOICE_POSTCODE_SIGNUP';

export const setInvoicePostCodeSignup = (invoicePostCode) => ({
  type: SET_INVOICE_POSTCODE_SIGNUP,
  invoicePostCode,
});

export const SET_INVOICE_CITY_SIGNUP = 'SET_INVOICE_CITY_SIGNUP';

export const setInvoiceCitySignup = (invoiceCity) => ({
  type: SET_INVOICE_CITY_SIGNUP,
  invoiceCity,
});

export const SET_DELIVERY_ADDRESS_SIGNUP = 'SET_DELIVERY_ADDRESS_SIGNUP';

export const setDeliveryAddressSignup = (deliveryAddress) => ({
  type: SET_DELIVERY_ADDRESS_SIGNUP,
  deliveryAddress,
});

export const SET_DELIVERY_POSTCODE_SIGNUP = 'SET_DELIVERY_POSTCODE_SIGNUP';

export const setDeliveryPostCodeSignup = (deliveryPostCode) => ({
  type: SET_DELIVERY_POSTCODE_SIGNUP,
  deliveryPostCode,
});

export const SET_DELIVERY_CITY_SIGNUP = 'SET_DELIVERY_CITY_SIGNUP';

export const setDeliveryCitySignup = (deliveryCity) => ({
  type: SET_DELIVERY_CITY_SIGNUP,
  deliveryCity,
});

export const SET_CHECKED_VEGAN = 'SET_CHECKED_VEGAN';

export const setCheckedVegan = (vegan) => ({
  type: SET_CHECKED_VEGAN,
  vegan, 
});

export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const SET_NEW_USER_FROM_API = 'SET_NEW_USER_FROM_API';

export const setNewUserFromApi = (email, password, lastname, firstname, invoiceAddress, invoicePostCode, invoiceCity, deliveryAddress, deliveryPostCode, deliveryCity, id) => ({
  type: SET_NEW_USER_FROM_API,
  email,
  password,
  lastname,
  firstname,
  invoiceAddress,
  invoicePostCode,
  invoiceCity,
  deliveryAddress,  
  deliveryPostCode,
  deliveryCity,
  id,
});

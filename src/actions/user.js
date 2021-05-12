export const SET_EMAIL_SIGNIN = 'SET_EMAIL_SIGNIN';

export const setEmailSignin = (email) => ({
  type: SET_EMAIL_SIGNIN,
  email,
});

export const SET_PASSWORD_SIGNIN = 'SET_PASSWORD_SIGNIN';

export const setPasswordSignin = (password) => ({
  type: SET_PASSWORD_SIGNIN,
  password,
});

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const SET_USER_FROM_API = 'SET_USER_FROM_API';

export const setUserFromApi = (email, password, lastname, firstname, invoiceAddress, invoicePostCode, invoiceCity, deliveryAddress, deliveryPostCode, deliveryCity, role, vegan, id, orderStartDate, orderEndDate) => ({
  type: SET_USER_FROM_API,
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
    role,
    vegan,
    id,
    orderStartDate,
    orderEndDate,
});

export const RESET_FIELD = 'RESET_FIELD';

export const resetField = () => ({
  type: RESET_FIELD,
});


export const LOGGED = 'LOGGED';

export const logged = () => ({
  type: LOGGED,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});

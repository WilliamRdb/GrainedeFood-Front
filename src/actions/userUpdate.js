export const SET_EMAIL_UPDATE = 'SET_EMAIL_UPDATE';

export const setEmailUpdate = (email) => ({
  type: SET_EMAIL_UPDATE,
  email,
});
export const SET_LASTNAME_UPDATE = 'SET_LASTNAME_UPDATE';

export const setLastnameUpdate = (lastname) => ({
  type: SET_LASTNAME_UPDATE,
  lastname,
});
export const SET_FIRSTNAME_UPDATE = 'SET_FIRSTNAME_UPDATE';

export const setFirstnameUpdate = (firstname) => ({
  type: SET_FIRSTNAME_UPDATE,
  firstname,
});
export const SET_INVOICE_ADDRESS_UPDATE = 'SET_INVOICE_ADDRESS_UPDATE';

export const setInvoiceAddressUpdate = (invoiceAddress) => ({
  type: SET_INVOICE_ADDRESS_UPDATE,
  invoiceAddress,
});
export const SET_INVOICE_POSTCODE_UPDATE = 'SET_INVOICE_POSTCODE_UPDATE';

export const setInvoicePostCodeUpdate = (invoicePostCode) => ({
  type: SET_INVOICE_POSTCODE_UPDATE,
  invoicePostCode,
});
export const SET_INVOICE_CITY_UPDATE = 'SET_INVOICE_CITY_UPDATE';

export const setInvoiceCityUpdate = (invoiceCity) => ({
  type: SET_INVOICE_CITY_UPDATE,
  invoiceCity,
});
export const SET_DELIVERY_ADDRESS_UPDATE = 'SET_DELIVERY_ADDRESS_UPDATE';

export const setDeliveryAddressUpdate = (deliveryAddress) => ({
  type: SET_DELIVERY_ADDRESS_UPDATE,
  deliveryAddress,
});
export const SET_DELIVERY_POSTCODE_UPDATE = 'SET_DELIVERY_POSTCODE_UPDATE';

export const setDeliveryPostCodeUpdate = (deliveryPostCode) => ({
  type: SET_DELIVERY_POSTCODE_UPDATE,
  deliveryPostCode,
});
export const SET_DELIVERY_CITY_UPDATE = 'SET_DELIVERY_CITY_UPDATE';

export const setDeliveryCityUpdate = (deliveryCity) => ({
  type: SET_DELIVERY_CITY_UPDATE,
  deliveryCity,
});


export const SUBMIT_UPDATE = 'SUBMIT_UPDATE';

export const submitUpdate = () => ({
  type: SUBMIT_UPDATE,
});

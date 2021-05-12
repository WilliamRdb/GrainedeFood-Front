import { connect } from 'react-redux';
import UserInformations from 'src/pages/UserPage/UserInformations.js';
import {
    setEmailUpdate,
    setLastnameUpdate,
    setFirstnameUpdate,
    setInvoiceAddressUpdate,
    setInvoicePostCodeUpdate,
    setInvoiceCityUpdate,
    setDeliveryAddressUpdate,
    setDeliveryPostCodeUpdate,
    setDeliveryCityUpdate,
    submitUpdate,
} from 'src/actions/userUpdate';


const mapStateToProps = (state) => ({
    email: state.email,
    lastname: state.lastname,
    firstname: state.firstname,
    invoiceAddress: state.invoiceAddress,
    invoicePostCode: state.invoicePostCode,
    invoiceCity: state.invoiceCity,
    deliveryAddress: state.deliveryAddress,
    deliveryPostCode: state.deliveryPostCode,
    deliveryCity: state.deliveryCity
});

const mapDispatchToProps = (dispatch) => ({
    setEmailUpdate: (email) => dispatch(setEmailUpdate(email)),
    setLastnameUpdate: (lastname) => dispatch(setLastnameUpdate(lastname)),
    setFirstnameUpdate: (firstname) => dispatch(setFirstnameUpdate(firstname)),
    setInvoiceAddressUpdate: (invoiceAddress) => dispatch(setInvoiceAddressUpdate(invoiceAddress)),
    setInvoicePostCodeUpdate: (invoicePostCode) => dispatch(setInvoicePostCodeUpdate(invoicePostCode)),
    setInvoiceCityUpdate: (invoiceCity) => dispatch(setInvoiceCityUpdate(invoiceCity)),
    setDeliveryAddressUpdate: (deliveryAddress) => dispatch(setDeliveryAddressUpdate(deliveryAddress)),
    setDeliveryPostCodeUpdate: (deliveryPostCode) => dispatch(setDeliveryPostCodeUpdate(deliveryPostCode)),
    setDeliveryCityUpdate: (deliveryCity) => dispatch(setDeliveryCityUpdate(deliveryCity)),
    submitUpdate: () => dispatch(submitUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInformations);

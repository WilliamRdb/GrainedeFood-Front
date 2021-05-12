import { connect } from 'react-redux';
import Signup from 'src/pages/LoginPage/Signup.js';
import {
    setEmailSignup,
    setPasswordSignup,
    setPasswordConfirmSignup,
    setLastnameSignup,
    setFirstnameSignup,
    setInvoiceAddressSignup,
    setInvoicePostCodeSignup,
    setInvoiceCitySignup,
    setDeliveryAddressSignup,
    setDeliveryPostCodeSignup,
    setDeliveryCitySignup,
    setCheckedVegan,
    submitSignup,
} from 'src/actions/register';
import {
    resetField
} from 'src/actions/user'

const mapStateToProps = (state) => ({
    email: state.email,
    emailSignup: state.emailSignup,
    passwordSignup: state.passwordSignup,
    passwordConfirmSignup: state.passwordConfirmSignup,
    lastnameSignup: state.lastnameSignup,
    firstnameSignup: state.firstnameSignup,
    invoiceAddressSignup: state.invoiceAddressSignup,
    invoicePostCodeSignup: state.invoicePostCodeSignup,
    invoiceCitySignup: state.invoiceCitySignup,
    deliveryAddressSignup: state.deliveryAddressSignup,
    deliveryPostCodeSignup: state.deliveryPostCodeSignup,
    deliveryCitySignup: state.deliveryCitySignup,
    checkedVegan: state.vegan
});

const mapDispatchToProps = (dispatch) => ({
    setEmailSignup: (email) => dispatch(setEmailSignup(email)),
    setPasswordSignup: (password) => dispatch(setPasswordSignup(password)),
    setPasswordConfirmSignup: (passwordConfirm) => dispatch(setPasswordConfirmSignup(passwordConfirm)),
    setLastnameSignup: (lastname) => dispatch(setLastnameSignup(lastname)),
    setFirstnameSignup: (firstname) => dispatch(setFirstnameSignup(firstname)),
    setInvoiceAddressSignup: (invoiceAddress) => dispatch(setInvoiceAddressSignup(invoiceAddress)),
    setInvoicePostCodeSignup: (invoicePostCode) => dispatch(setInvoicePostCodeSignup(invoicePostCode)),
    setInvoiceCitySignup: (invoiceCity) => dispatch(setInvoiceCitySignup(invoiceCity)),
    setDeliveryAddressSignup: (deliveryAddress) => dispatch(setDeliveryAddressSignup(deliveryAddress)),
    setDeliveryPostCodeSignup: (deliveryPostCode) => dispatch(setDeliveryPostCodeSignup(deliveryPostCode)),
    setDeliveryCitySignup: (deliveryCity) => dispatch(setDeliveryCitySignup(deliveryCity)),
    setCheckedVegan:(vegan) => dispatch(setCheckedVegan(vegan)),
    submitSignup: () => dispatch(submitSignup()),
    resetField: ()=> dispatch(resetField())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

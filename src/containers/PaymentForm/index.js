import { connect } from 'react-redux';
import PaymentForm from '/src/pages/CartPage/TestPayement/PaymentForm/PaymentForm.js';
import {
    setStartDate,
    setEndDate,
} from 'src/actions/subscribe';

const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    finalPrice: state.finalPrice,
    userId: state.id,
    email: state.email,
    password: state.password,
    lastname: state.lastname,
    firstname: state.firstname,
    invoiceAddress: state.invoiceAddress,
    invoicePostCode: state.invoicePostCode,
    invoiceCity: state.invoiceCity,
    deliveryAddress: state.deliveryAddress,
    deliveryPostCode: state.deliveryPostCode,
    deliveryCity: state.deliveryCity,
    role: state.role,
});

const mapDispatchToProps = (dispatch) => ({
setStartDate: (orderStartDate) => dispatch(setStartDate(orderStartDate)),
setEndDate: (orderEndDate) => dispatch(setEndDate(orderEndDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

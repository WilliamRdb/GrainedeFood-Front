import { connect } from 'react-redux';
import DeliveryFormConfirm from '/src/pages/CartPage/DeliveryFormConfirm';


const mapStateToProps = (state) => ({
    lastname: state.lastname,
    firstname: state.firstname,
    deliveryAddress: state.deliveryAddress,
    deliveryPostCode: state.deliveryPostCode,
    deliveryCity: state.deliveryCity,
    vegan: state.vegan
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryFormConfirm);

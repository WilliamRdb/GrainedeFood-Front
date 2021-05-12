import { connect } from 'react-redux';
import CartResume from '/src/pages/CartPage/CartResume';
import {
setFinalPrice,
} from 'src/actions/subscribe'

const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    selectedSubPrice: state.selectedSubPrice,
    finalPrice: state.finalPrice
});

const mapDispatchToProps = (dispatch) => ({
setFinalPrice: (finalPrice) => dispatch(setFinalPrice(finalPrice))

});

export default connect(mapStateToProps, mapDispatchToProps)(CartResume);

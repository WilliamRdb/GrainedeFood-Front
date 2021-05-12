import { connect } from 'react-redux';
import TestPayement from '/src/pages/CartPage/TestPayement';


const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    selectedSubPrice: state.selectedSubPrice,
    finalPrice: state.finalPrice
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestPayement);

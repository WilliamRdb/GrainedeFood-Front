import { connect } from 'react-redux';
import NavFormule from '/src/pages/CartPage/NavFormule';


const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    selectedSubPrice: state.selectedSubPrice
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavFormule);

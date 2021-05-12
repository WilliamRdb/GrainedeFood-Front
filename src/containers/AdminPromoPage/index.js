import { connect } from 'react-redux';
import AdminPromoPage from 'src/pages/AdminPromoPage';
/*import {
    setNewPromo
} from 'src/actions/admin';*/

const mapStateToProps = (state) => ({
    promoCode: state.promoCode,
    promoPourcent: state.promoPourcent,
    promoStartDate: state.promoStartDate,
    promoEndDate: state.promoEndDate,
});

const mapDispatchToProps = (dispatch) => ({
  setNewPromo: (element) => dispatch(setNewPromo(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPromoPage);

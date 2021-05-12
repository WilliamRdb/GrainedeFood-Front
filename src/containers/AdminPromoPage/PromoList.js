import { connect } from 'react-redux';
import PromoList from 'src/pages/AdminPromoPage/PromoList.js';
import {
    searchCodePromo
} from 'src/actions/admin';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  searchCodePromo: (promoCodeSearched, e) => dispatch(searchCodePromo(promoCodeSearched, e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoList);

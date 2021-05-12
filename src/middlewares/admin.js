import api from 'src/api'
import {
    SEARCH_CODE_PROMO,
    modifyCodePromo
} from 'src/actions/admin';

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SEARCH_CODE_PROMO: {
        api.get(`/promo/${action.promoCodeSearched}`)
          .catch((err)=> console.log('error: ', err))
          .then(result => store.dispatch(modifyCodePromo(result.data.promo.code, result.data.promo.pourcent, result.data.promo.start_date, result.data.promo.end_date)))
 return next(action);
}
default:
return next(action);
 }
};

import { connect } from 'react-redux';
import NavFormule from '/src/pages/SubscribePage/NavFormule.js';
import {
    setSub1Month, setSub3Month, setSub6Month
} from 'src/actions/subscribe';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setEmailSignin: (email) => dispatch(setEmailSignin(email)),
  setPasswordSignin: (password) => dispatch(setPasswordSignin(password)),
  submitLogin: () => dispatch(submitLogin()),
  resetField: ()=> dispatch(resetField()),
  setSub1Month: () => dispatch(setSub1Month()),
  setSub3Month: () => dispatch(setSub3Month()),
  setSub6Month: () => dispatch(setSub6Month()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavFormule);
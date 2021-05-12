import { connect } from 'react-redux';
import Signin from 'src/pages/LoginPage/Signin.js';
import {
    setEmailSignin,
    setPasswordSignin,
    submitLogin,
    resetField
} from 'src/actions/user';

const mapStateToProps = (state) => ({
    email: state.email,
    emailSignin: state.emailSignin,
    passwordSignin: state.passwordSignin,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailSignin: (email) => dispatch(setEmailSignin(email)),
  setPasswordSignin: (password) => dispatch(setPasswordSignin(password)),
  submitLogin: () => dispatch(submitLogin()),
  resetField: ()=> dispatch(resetField())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

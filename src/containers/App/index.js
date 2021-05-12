import { connect } from 'react-redux';
import App from '/src/components/App';
import {
    logout
} from 'src/actions/user';

const mapStateToProps = (state) => ({
    logged: state.logged,
    role: state.role,
});

const mapDispatchToProps = (dispatch) => ({
logout: ()=> dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import DisconnectUser from '/src/pages/UserPage/DisconnectUser.js';
import {
    logout
} from 'src/actions/user';

const mapStateToProps = (state) => ({
    logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
logout: ()=> dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectUser);

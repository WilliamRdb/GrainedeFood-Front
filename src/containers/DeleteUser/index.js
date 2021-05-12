import { connect } from 'react-redux';
import DeleteUser from '/src/pages/UserPage/DeleteUser.js';
import {
    logout
} from 'src/actions/user';

const mapStateToProps = (state) => ({
    logged: state.logged,
    id:state.id
});

const mapDispatchToProps = (dispatch) => ({
logout: ()=> dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);

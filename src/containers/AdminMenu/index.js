import { connect } from 'react-redux';
import AdminMenu from '/src/components/AdminMenu';
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);

import { connect } from 'react-redux';
import SidebarMenu from '/src/components/Header/SidebarMenu.js';
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);

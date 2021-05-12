import { connect } from 'react-redux';
import LoginPage from 'src/pages/LoginPage';

const mapStateToProps = (state) => ({
  firstname: state.firstname,
  logged: state.logged
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

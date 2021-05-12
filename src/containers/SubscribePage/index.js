import { connect } from 'react-redux';
import SubscribePage from '/src/pages/SubscribePage';
import {
    setSub1Month
} from 'src/actions/subscribe';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setSub1Month: () => dispatch(setSub1Month()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribePage);

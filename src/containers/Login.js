import { connect } from "react-redux";
import Login from '../components/LogIn';
import { authenticate, logOff } from "../actions/index";
import state from '../redux/state';

const mapStateToProps = state => ({
  ...state
})
const matchDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate),
  logOff: () => dispatch(logOff)
})
export default connect(mapStateToProps, matchDispatchToProps)(Login)
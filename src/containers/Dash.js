import { connect } from "react-redux";
import Dashboard from '../components/Dashboard'
// import state from '../redux/state';
import { authenticate, logOff } from "../actions/index";

const mapStateToProps = state => ({
  ...state
})
const matchDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate),
  logOff: () => dispatch(logOff)
})
export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)
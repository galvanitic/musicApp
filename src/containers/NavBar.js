import { connect } from "react-redux";
import NavBar from '../components/NavBar'
import { authenticate, logOff } from "../actions/index";

const mapStateToProps = state => ({
  ...state
})
const matchDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate),
  logOff: () => dispatch(logOff)
})
export default connect(mapStateToProps, matchDispatchToProps)(NavBar)
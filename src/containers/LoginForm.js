import { connect } from "react-redux";
import LoginForm from '../components/LoginForm'
import state from '../redux/state';
import { authenticate } from "../actions/index";
import { bindActionCreators } from "redux";

const mapStateToProps = () => {
  return {
    authorized: state.authorized
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({authenticate: authenticate}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(LoginForm)
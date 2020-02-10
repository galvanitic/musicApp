import { connect } from "react-redux";
import Login from '../components/LogIn';
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    authorized: state.authorized
  }
}
export default connect(mapStateToProps)(Login)
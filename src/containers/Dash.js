import { connect } from "react-redux";
import Dash from '../components/Dash'
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    authorized: state.authorized
  }
}
export default connect(mapStateToProps)(Dash)
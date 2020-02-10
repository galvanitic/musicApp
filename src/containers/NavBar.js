import { connect } from "react-redux";
import NavBar from '../components/NavBar'
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    authorized: state.authorized
  }
}
export default connect(mapStateToProps)(NavBar)
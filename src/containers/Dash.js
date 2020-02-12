import { connect } from "react-redux";
import Dashboard from '../components/Dashboard'
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    authorized: state.authorized
  }
}
export default connect(mapStateToProps)(Dashboard)
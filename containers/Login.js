import { connect } from 'react-redux';
import { login, logout } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password)),
  onLogout: () => dispatch(unsetUserData()),
});

export default connect(null, mapDispatchToProps)(Login);

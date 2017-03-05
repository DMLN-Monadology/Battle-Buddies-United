import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import UsersIndex from './users_index';


const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex);

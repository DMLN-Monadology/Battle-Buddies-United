import {FETCH_USERS, receiveUsers} from '../actions/users_actions';
import {fetchUsers} from '../util/users_api_util';


const UsersMiddleware = store => next => action => {

  const fetchUsersCB = (users) => store.dispatch(receiveUsers(users));
  switch(action.type){
    case FETCH_USERS:
      fetchUsers(fetchUsersCB)
      return next(action);
    default:
      return next(action);
  }
}

export default UsersMiddleware;


import {RECEIVE_USERS} from '../actions/users_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  users: null
});

const UsersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState
  switch(action.type) {
    //Users
    case RECEIVE_USERS:
      newState = merge({}, oldState, {["BBU"]: action.users});
      return newState;
    default:
      return oldState;
  }
}

export default UsersReducer;

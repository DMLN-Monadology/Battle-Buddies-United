import {applyMiddleware} from 'redux';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  UsersMiddleware
);

export default RootMiddleware;

import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import activeUserReducer from './reducer_activeUser';

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser : activeUserReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RoommateFormReducer from './RoommateFormReducer';
import RoommateReducer from './RoommateReducer';

export default combineReducers({
  auth: AuthReducer,
  roommateForm: RoommateFormReducer,
  roommates: RoommateReducer
});

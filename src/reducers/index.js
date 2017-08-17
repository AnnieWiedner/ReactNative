import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RoommateFormReducer from './RoommateFormReducer';
import RoommateReducer from './RoommateReducer';
import HouseReducer from './HouseReducer';
import HouseFormReducer from './HouseFormReducer';



export default combineReducers({
  auth: AuthReducer,
  roommateForm: RoommateFormReducer,
  roommates: RoommateReducer,
  houses: HouseReducer,
  houseForm: HouseFormReducer
});

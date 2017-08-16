import {
  ROOMMATE_UPDATE,
  ROOMMATE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOMMATE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ROOMMATE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

import {
  HOUSE_UPDATE,
  HOUSE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  address: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOUSE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case HOUSE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

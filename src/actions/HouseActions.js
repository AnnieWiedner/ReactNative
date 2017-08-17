import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  HOUSE_UPDATE,
  HOUSE_CREATE,
  HOUSES_FETCH_SUCCESS,
} from './types'

export const houseUpdate = ({ prop, value }) => {
  return {
    type: HOUSE_UPDATE,
    payload: { prop, value }
  };
};

export const houseCreate = ({ name, address }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref('/houses/')
      .push({ name, address })
      .then(() => {
        dispatch({ type: HOUSE_CREATE });
        Actions.houseList({ type: 'reset' })
      })
  }
};

export const housesFetch  = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref('/houses/')
    .on('value', snapshot => {
      dispatch({ type: HOUSES_FETCH_SUCCESS, payload: snapshot.val() })
    })
  }
}

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ROOMMATE_UPDATE,
  ROOMMATE_CREATE,
  ROOMMATES_FETCH_SUCCESS,
} from './types'

export const roommateUpdate = ({ prop, value }) => {
  return {
    type: ROOMMATE_UPDATE,
    payload: { prop, value }
  };
};

export const roommateCreate = ({ name, phone }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/users/' + currentUser.uid + '/roommates')
      .push({ name, phone })
      .then(() => {
        dispatch({ type: ROOMMATE_CREATE });
        Actions.roommateList({ type: 'reset' })
      })
  }
};

export const roommatesFetch  = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/users/' + currentUser.uid + '/roommates')
    .on('value', snapshot => {
      dispatch({ type: ROOMMATES_FETCH_SUCCESS, payload: snapshot.val() })
    })
  }
}

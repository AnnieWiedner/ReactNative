import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCvXTa_MZuqOauQEaKQrMwJCJ9zv8svJV8",
      authDomain: "manager-a77b3.firebaseapp.com",
      databaseURL: "https://manager-a77b3.firebaseio.com",
      projectId: "manager-a77b3",
      storageBucket: "manager-a77b3.appspot.com",
      messagingSenderId: "212333649031"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RoommateList from './components/RoommateList';
import RoommateCreate from './components/RoommateCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 70 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.roommateCreate()}
          rightTitle="Add"
          key="roommateList"
          component={RoommateList}
          title="Roommates"
        />
        <Scene
          key="roommateCreate"
          component={RoommateCreate}
          title="Roommate Create"
        />
      </Scene>
    </Router>
  )
};


export default RouterComponent;

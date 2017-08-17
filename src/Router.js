import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RoommateList from './components/RoommateList';
import RoommateCreate from './components/RoommateCreate';
import HouseList from './components/HouseList';
import HouseCreate from './components/HouseCreate';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 70 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene key="register" component={RegisterForm} title="Register" />
      </Scene>

      <Scene key="house">
        <Scene
          onRight={() => Actions.houseCreate()}
          rightTitle="Add"
          key="houseList"
          component={HouseList}
          title="Houses"
        />
        <Scene
          key="houseCreate"
          component={HouseCreate}
          title="House Create"
        />
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

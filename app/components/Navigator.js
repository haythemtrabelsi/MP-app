import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Navigation} from 'react-navigation';

import Login from './Login';
import Register from './Register';

const RootStack = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null //this will hide the header
    },
   },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      header: null //this will hide the header
    },
  },

});


const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;

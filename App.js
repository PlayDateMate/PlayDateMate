
import React, { Component } from 'react';
import Dashboard from './Views/Dashboard/Dashboard.js';
import Events from './Views/Events/Events.js';
import Friends from './Views/Friends/Friends.js';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
import Chat from './Views/Chat/Chat'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      
      <AppDrawerNavigator/>
      // <AppNavigator/>
      
    );
  }
}

// const AppNavigator = StackNavigator({
//   Login: {screen: Login},
//   Dashboard:{screen: Dashboard,
//     navigationOptions:{
//       header:null
//     }},
//   Events:{screen: Events},
//   Friends:{screen: Friends}
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
//   });

  const AppDrawerNavigator = DrawerNavigator({
    Login:{screen: Login},
    Profile:{screen:Profile},
    Events: {screen:Events},
    Friends:{screen: Friends},
    Dashboard:{screen:Dashboard},
    Chat:{screen: Chat}

})

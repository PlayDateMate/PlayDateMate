
import React, { Component } from 'react';
import Dashboard from './Views/Dashboard/Dashboard.js';
import Events from './Views/Events/Events.js';
import Friends from './Views/Friends/Friends.js';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
import Chat from './Views/Chat/Chat'
import FriendSearch from './Views/Friends/FriendSearch'
import Search from './Views/Events/EventSearch'
import Create from './Views/Events/CreateEvent';
import Children from './Views/Profile/Children'

import { StackNavigator, DrawerNavigator } from 'react-navigation'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {

  render() {
    console.log("does anything happen here?")
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
    Dashboard:{screen:Dashboard},
    Profile:{screen:Profile},
    Events: {screen:Events},
    Friends:{screen: Friends},
    Chat:{screen: Chat},
    FriendSearch:{screen: FriendSearch},
    Create: {screen: Create},
    Search: {screen: Search},
    Children: {screen: Children}
})

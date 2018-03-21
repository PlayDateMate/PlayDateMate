
import React, { Component } from 'react';
import Dashboard from './Views/Dashboard/Dashboard.js';
import Events from './Views/Events/Events.js';
import Friends from './Views/Friends/Friends.js';
import Login from './Views/Login/Login';
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
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: {screen: Login},
  Dashboard:{screen: Dashboard},
  Events:{screen: Events},
  Friends:{screen: Friends}
  });

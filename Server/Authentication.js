import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Auth0 from 'react-native-auth0';//from auth0

var credentials = require('./auth0-credentials');

const auth0 = new Auth0(credentials);

export default class PlayDateMate extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  



  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}>Auth0Sample - Login</Text> */}
        {/* <Text>
          You are {loggedIn ? '' : 'not '}logged in.
        </Text> */}
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('PlayDateMate', () => PlayDateMate);

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Friends from '../Friends/Friends'
import Events from '../Events/Events'
import Authentication from '../../Server/Authentication'
import { Icon, Container, Header, Content, Left } from 'native-base';
import Auth0 from 'react-native-auth0';//from 
import axios from 'axios'

var credentials = require('./../../Server/auth0-credentials');

const auth0 = new Auth0(credentials);

import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground
} from 'react-native';


export class Login extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor(props) {
        super(props);
        this.state = {accessToken: null}
    }

    //code below is auth0 stuff
    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile',
                audience: 'https://' + credentials.domain + '/userinfo'
            })
            .then(credentials => {
                this.setState({ accessToken: credentials.accessToken });
                console.log(credentials.idToken)
                axios.post('http://192.168.3.135.3001/api/auth', {accessToken: credentials.idToken}).then( (response)=> {
                    console.log(credentials.idToken)
                })
                this.props.navigation.navigate('Dashboard') 
            })
            .catch(error => {
                console.log(error)
            });

    };

    _onLogout = () => {
        if (Platform.OS === 'android') {
            this.setState({ accessToken: null });
        } else {
            auth0.webAuth
                .clearSession({})
                .then(success => {
                    this.setState({ accessToken: null });
                })
                .catch(error => console.log(error));
        }
    };
    //code above is auth0 stuff

    render() {
        let loggedIn = this.state.accessToken === null ? false : true; //auth0 stuff
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../images/login2.jpg')}>
                <Container>
                    <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Button onPress={() => this._onLogin()} title={'Log in'}>
                        </Button>
                    </Content>

                    {/* code below new stuff on auth0 */}
                    {/* <Text style={styles.header}>PlayDateMate - Login</Text>
                    <Text>
                        You are {loggedIn ? '' : 'not '}logged in.
                    </Text>
                    <Button
                    onPress={ () => loggedIn ? this._onLogout : this._onLogin}
                    title={loggedIn ? 'Log Out' : 'Log In'}
                    /> */}
                    {/* code above new stuff on auth0 */}

                </Container>
            </ImageBackground>
        )
    }
}

//code below is styling for auth0
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
  //code above is styling for auth0
  

const LoginScreenStackNavigator = StackNavigator({
    Login: {
        screen: Login
    },
    Authentication: {
        screen: Authentication
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null,
        }
    }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }

    });

export default LoginScreenStackNavigator;



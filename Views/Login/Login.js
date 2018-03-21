import React, {Component} from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Friends from '../Friends/Friends'
import Events from '../Events/Events'


import{
    StyleSheet, 
    Text,
    View,
    Button
} from 'react-native';


export default class Login extends Component{
    render(){
        return(
            <View>
                <Text>This is the login screen</Text>
                <Button onPress = {()=>{this.props.navigation.navigate('Dashboard')}} title="Login"></Button>
            </View>
        )
    }
}

const LoginScreenStackNavigator = StackNavigator({
    Login:{
        screen:Login
    },
    Dashboard:{
        screen: Dashboard,
        navigationOptions:{
            header: null,
        }}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
        
    });

const AppDrawerNavigator = DrawerNavigator({
    Profile:{screen:Profile},
    Events: {screen:Events},
    Friends:{screen: Friends},
    Dashboard:{screen:Dashboard}

})
     
    

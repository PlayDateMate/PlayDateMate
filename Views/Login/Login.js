import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Friends from '../Friends/Friends'
import Events from '../Events/Events'
import {Icon, Container, Header, Content, Left} from 'native-base';





import{
    StyleSheet, 
    Text,
    View,
    Button,
    ImageBackground
} from 'react-native';


export class Login extends Component{
    static navigationOptions ={
        drawerLabel: ()=>null
    }
    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('../../images/login2.jpg')}>
           <Container>
               <Content contentContainerStyle ={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button onPress = {()=>{this.props.navigation.navigate('Dashboard')}} title = {'Login'}>
                </Button>
               </Content>
           </Container>
           </ImageBackground>
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

export default LoginScreenStackNavigator;
     
    

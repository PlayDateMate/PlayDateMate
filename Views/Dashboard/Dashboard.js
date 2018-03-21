import React, {Component} from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base'


import{
    StyleSheet, 
    Text,
    View,
} from 'react-native';


export default class Dashboard extends Component{
    render(){
        return(
            
            <Container >
                <Header>
                    <Left >
                        <Icon 
                        
                        name = "ios-menu" on Press = {()=>{
                            this.props.navigation.navigate('DrawerOpen')
                        }}/>
                    </Left>
                </Header>
            </Container>
        )
    }
}


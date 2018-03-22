import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base'


import{
    StyleSheet, 
    Text,
    View
} from 'react-native';


export default class Events extends Component{
    render(){
        return(
            <Container >
            <Header>
                <Left >
                <Icon name = "ios-menu" onPress = {()=>{
                this.props.navigation.navigate('DrawerOpen')
            }}/>
                </Left>
            </Header>
            <Content contentContainerStyle ={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Events</Text>
        </Content>
        </Container>
        )
    }
}


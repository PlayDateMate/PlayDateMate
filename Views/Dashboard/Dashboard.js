import React, {Component} from 'react';
// import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base'


import{
    StyleSheet, 
    Text,
    View,
    TextInput
} from 'react-native';


export default class Dashboard extends Component{
    render(){
        return(
            
            <Container >
                <Header style={styles.dashboardheader}>
                    <Left  >
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
                <Text>Dashboard</Text>
            </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    dashboardheader:{
        backgroundColor: 'lightgrey',
        justifyContent: 'flex-start'
    }
})


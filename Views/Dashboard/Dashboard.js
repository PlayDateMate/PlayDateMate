import React, {Component} from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
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
                <Header style={{backgroundColor: 'gray', display: 'flex'}}>
                    <Left style={{justifyContent:'flex-start'}
                        
                } >
                        <Icon 
                        
                        name = "ios-menu" on Press = {()=>{
                            this.props.navigation.navigate('DrawerOpen')
                        }}/>
                    </Left>
                </Header>
                <View>
                    
                    <TextInput placeholder='Enter your name!' style={{backgroundColor: 'red'}}></TextInput>
                    
                </View>
            </Container>
        )
    }
}


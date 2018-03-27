import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Container, Header, Content, Left, Right, Body, Title} from 'native-base'


import{
    StyleSheet, 
    Text,
    View,
    Button
} from 'react-native';


import FriendSearch from './FriendSearch'


export default class Friends extends Component{
    constructor(){
        super();
        this.state = {
            userId: ''
        }
    }

componentDidMount(){
    console.log('id in to friends', this.props)
    this.setState({
        userId : this.props.navigation.state.params.id
    })
}
    render(){
        
        return(
            <Container >
                <Header>
                    <Left >
                    <Icon name = "ios-menu" onPress = {()=>{
                    this.props.navigation.navigate('Dashboard', {id: this.state.userId})
                }}/>
                    </Left>
                    <Body>
                        <Title>Friends</Title>
                    </Body>
                    <Right>
            
                    </Right>
                </Header>
                <Content contentContainerStyle ={{
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center'
            }}>
                                            {/* Navigation */}

                <View style = {styles.ButtonBorder}>
                    <Text style = {{color:'white', fontSize: 20}} onPress={() => this.props.navigation.navigate('FriendSearch', {id: this.state.userId})}>Find Friends</Text>
                </View>
                                            {/* Navigaition End */}

                <View style={styles.Requests}>
                    <Text>Requests</Text>
                </View>

                <View style={styles.Friends}>
                    <Text>Friends</Text>
                </View>
            </Content>
            </Container>
        
        )
    }
}
const styles = StyleSheet.create({
    ButtonBorder:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 0.5,
        borderColor: 'blue',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 4,
        padding: 4,
        marginTop: 20,
        width: 225
    },
    Requests:{
        flex: .5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 20,
        width: 300,
        alignItems: 'center'
    },
    Friends:{
        flex:2,
        marginTop: 20,
        width: 300,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',

    }


})

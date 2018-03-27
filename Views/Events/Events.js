import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right} from 'native-base'


import{
    StyleSheet, 
    Text,
    View
} from 'react-native';




export default class Events extends Component{
    constructor(){
        super();
        this.state = {
            userId: ''
        }
    }

    componentDidMount(){
        console.log('id in to events', this.props.navigation.state.params.id)
        this.setState({
            userId : this.props.navigation.state.params.id
        })
    }
    render(){
        return(
            <Container >
            <Header>
                <Left >
                <Icon name = "home" onPress = {()=>{
                this.props.navigation.navigate('Dashboard', {id: this.state.userId})
            }}/>
                </Left>
                <Body>
                    <Title>Events</Title>
                </Body>
                <Right>
            
                </Right>
            </Header>
            <Content contentContainerStyle ={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <View style = {styles.ButtonContainer}> 
            <View onPress={() => this.props.navigation.navigate('CreateEvent',{id:this.state.userId})} style = {styles.ButtonBorder}><Text style = {{color:'white', fontSize: 15}}>Create Events</Text></View>
            <View onPress= {() => this.props.navigation.navigate('EventSearch',{id:this.state.userId})} style = {styles.ButtonBorder}><Text style = {{color:'white', fontSize: 15}}>Search Events</Text></View>
        </View>
                <View style={styles.Invitations}><Text>Invitations</Text></View>
                <View style={styles.MyEvents}><Text>My Events</Text></View>
                <View style={styles.UpcomingEvents}><Text>Upcoming Events</Text></View>
        </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    ButtonContainer:{
        justifyContent: 'center',
        flexDirection:'row'
    },
    ButtonBorder:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 0.5,
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 4,
        marginTop: 20,
        width: 150,
        marginRight: 20
    },
    Invitations:{
        flex: .5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 20,
        width: 300,
        alignItems: 'center'
    },
    MyEvents:{
        flex:2,
        marginTop: 20,
        width: 300,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
    UpcomingEvents:{
        flex:2,
        marginTop: 20,
        width: 300,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    }



})
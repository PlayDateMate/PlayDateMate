import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right} from 'native-base';



import{
    StyleSheet, 
    Text,
    View,
    Dimensions
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
        {/* <Text style={{color:'red'}} onPress={()=> this.props.navigation.navigate('Create',{id:this.state.userId})}>Create</Text>
        <Text style={{color:'red'}} onPress={()=> this.props.navigation.navigate('Search',{id:this.state.userId})}>Search</Text>  */}
            <Text onPress={() => this.props.navigation.navigate('Create',{id:this.state.userId})} style = {styles.ButtonBorder}>Create Events</Text>
            <Text onPress={() => this.props.navigation.navigate('Search',{id:this.state.userId})} style = {styles.ButtonBorder}>Search Events</Text>
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
        alignItems: 'center',
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
        marginRight: 20,
        fontSize: 15,
        color: 'white',
      
    },
    Invitations:{
        flex: .5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 20,
        width: 300,
        
        
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
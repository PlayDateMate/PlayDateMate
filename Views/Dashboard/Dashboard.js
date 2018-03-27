import React, {Component} from 'react';
// import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {Icon, Container, Header, Content, Left, Body, Right, Title} from 'native-base';
import {Button} from 'react-native';
import {StackRouter, DrawerNavigator} from 'react-navigation'

import Friends from '../Friends/Friends'
import Events from '../Events/Events'
import Profile from '../Profile/Profile'
import Chat from '../Chat/Chat'
import CreateEvent from '../Events/CreateEvent'
import EventSearch from '../Events/EventSearch'
import FriendSearch from '../Friends/FriendSearch'

import{
    StyleSheet, 
    Text,
    View,
    TextInput,
    ImageBackground,
    Image
} from 'react-native';


export default class Dashboard extends Component{

    constructor(){
        super();
        this.state = {
            user_name: '',
            zip_code: '',
            children: '', 
            userId: ''
            
        }
    }

  componentDidMount(){
      if(this.props.navigation.state.params.id){
      this.setState({
          userId:this.props.navigation.state.params.id
      })
    }else{
        console.log("proppppppssss",this.props)
        this.setState({
            userId: 5
        })
    }
}

    render(){
                
        return(
            
            
            <Container>
                
                <Header style={styles.dashboardheader}>
                
                    <Left  >
                    <Icon name = "home" onPress = {()=>{
                    this.props.navigation.navigate('Profile', {id:this.state.userId})
                }}/>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Dashboard</Title>
                    </Body>
                    <Right>
            
                    </Right>
                </Header>
                {/* <ImageBackground style={{flex:1}} source={require('../../images/login2.jpg')}> */}
            <Content contentContainerStyle ={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
            {/* // ***************************** To Do List ******************************** */}
            <View>
                {this.state.zip_code ? <Text></Text> :
                <Text style={{color:'red'}} onPress={()=> this.props.navigation.navigate('Profile',{id:this.state.userId})}>Your Zip Code needs to be updated!</Text>

                }
            </View>
            <View>
                {this.state.children ? <Text></Text> :
                <Text style={{color:'red'}} onPress={()=> this.props.navigation.navigate('Profile', {id:this.state.userId})}>Your Children need to be updated!</Text>

                }
            </View>

            {/* // ***************************** End To Do List ********************************** */}

            <View style={{ borderWidth:.5, borderColor:'gray',  borderRadius: 4, width: 250, margin: 50, backgroundColor: 'blue', alignItems:'center', height: 100, justifyContent:'center'}}>
                <Text style={{  color: 'white', 
                                
                                fontSize: 25
                            }} 
                    
                    onPress={()=> this.props.navigation.navigate('Friends', {id:this.state.userId})}>
                Friends
                </Text>
            </View>
            <View style={{ borderWidth:.5, borderColor:'gray',  borderRadius: 4, width: 250, margin: 50, backgroundColor: 'blue', alignItems:'center', height: 100, justifyContent:'center'}}>
                <Text style={{  color: 'white', 
                            
                                fontSize: 25,
                                
                                
                            }}

                    onPress={()=> this.props.navigation.navigate('Events', {id:this.state.userId})}>
                Events
                </Text>
            
            </View>

               
            </Content>
            {/* </ImageBackground>  */}
            
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    dashboardheader:{
        backgroundColor: 'lightgrey',
        justifyContent: 'flex-start'
    },
   
        
       
    
    

})

// const AppDrawerNavigator = DrawerNavigator({
    
//     Profile:{screen:Profile},
//     Events: {screen:Events},
//     Friends:{screen: (props)=> <Friends {...props} id={this.state.userId}/> },
//     Dashboard:{screen:Dashboard},
//     Chat:{screen: Chat},
//     FriendSearch:{screen: FriendSearch},
    
//     EventSearch: {screen: EventSearch},
// })




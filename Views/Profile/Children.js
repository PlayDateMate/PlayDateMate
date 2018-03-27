import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right,} from 'native-base';


const axios = require('axios');



import{
    StyleSheet, 
    Text,
    View, 
    TextInput,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';


export default class Children extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            zip: '',
            email: '',
            profilePicture: '',
            canEdit: false, 
            userId:'',
         
        }
        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onEdit(){
        console.log("clicked")
        this.setState({
            canEdit: true
        })
    }
    onSave(){
        console.log("Saved")
        this.setState({
            canEdit:false
        })
    }
   
    render(){  
        console.log("where are my kids??", this.props)
        return(
            <Container >
                <Header>
                    <Left >
                    <Icon name = "home" onPress = {()=>{
                    this.props.navigation.navigate('Dashboard', {id: this.state.userId})
                }}/>
                    </Left>
                    <Body>
                        <Title>{this.props.navigation.state.params.child.child_name}</Title>
                    </Body>
                    <Right>
            
                    </Right>
                </Header>

                <Content contentContainerStyle ={{
                flex: 1,
                alignItems: 'center',
                
            }}>
            <View >
                {this.state.profilePicture ?
                <Image source={{uri:this.state.profilePicture.toString()}}  style={{ borderWidth:.5, borderColor:'gray',  borderRadius: 60, width: 125, margin: 50, alignItems:'center', height: 125, justifyContent:'center'}}/>
                :
                <Icon name="add-user"/>}
               
                {this.state.canEdit ?
                <View>
                <Text >{this.props.navigation.state.params.child.child_name}</Text>
                <TextInput></TextInput>
                <Text>{this.props.navigation.state.params.child.age}</Text>
                <TextInput></TextInput>
                <Text>{this.props.navigation.state.params.child.interests}</Text>
                <TextInput></TextInput>
                </View>
            :
            <View>
                <Text >{this.props.navigation.state.params.child.child_name}</Text>
                
                
                <Text>{this.props.navigation.state.params.child.age}</Text>
                <Text>{this.props.navigation.state.params.child.interests}</Text>
               
                </View>
            }
            </View>
            

            <View>
                {this.state.canEdit ? <Text onPress={()=>this.onSave()}>Save</Text> : <Text onPress={()=>this.onEdit()}>Edit</Text>}
                
            </View>

           

            </Content>
            
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    wrapper: {
      paddingTop: 50,
      flex: 1
    },
  
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    modal2: {
      height: 230,
      backgroundColor: "#3B5998"
    },
  
    modal3: {
      height: 300,
      width: 300
    },
  
    modal4: {
      height: 300
    },
  
    btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
    },
  
    btnModal: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 50,
      height: 50,
      backgroundColor: "transparent"
    },
  
    text: {
      color: "black",
      fontSize: 22
    }
  
  });

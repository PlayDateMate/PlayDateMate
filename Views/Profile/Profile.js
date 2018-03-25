import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right,} from 'native-base';
const axios = require('axios');



import{
    StyleSheet, 
    Text,
    View, 
    TextInput,
    Image
} from 'react-native';


export default class Profile extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            zip: '',
            email: '',
            profilePicture: require('../../images/login2.jpg'),
            canEdit: false
        }
        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    // componentDidMount(){
    //     axios.get('http://172.16.1.43:3001/api/getUser',(req,res)=>{
    //         this.setState({
    //             name: res.data.user_name,
    //             profilePicture: res.data.image
    //         })
    //     })
    // }
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
        return(
            <Container >
                <Header>
                    <Left >
                    <Icon name = "ios-menu" onPress = {()=>{
                    this.props.navigation.navigate('DrawerOpen')
                }}/>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
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
                <Image source={this.state.profilePicture}  style={{ borderWidth:.5, borderColor:'gray',  borderRadius: 60, width: 125, margin: 50, alignItems:'center', height: 125, justifyContent:'center'}}></Image>
                :
                <Icon name="add-user"/>}
               
                {this.state.canEdit ?
                <View>
                <Text >Name</Text>
                <TextInput></TextInput>
                <Text>Address</Text>
                <TextInput></TextInput>
                <Text>About</Text>
                <TextInput></TextInput>
                </View>
            :
            <View>
                <Text >Name</Text>
                
                <Text>Address</Text>
                
                <Text>About</Text>
               
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

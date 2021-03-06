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


export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            zip: '',
            email: '',
            profilePicture: require('../../images/login2.jpg'),
            canEdit: false, 
            userId:'',
            children: [{id:1, user_id: 5, age: 3, child_name: "Tino", interests: "fun things"},{id:2, user_id: 5, age: 60, child_name: "Bob", interests: "boring things"}]
        }
        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    async componentDidMount(){
        console.log("test front",this.props.navigation.state.params.id)
        await axios.get('https://192.168.3.142/api/getUser/'+this.props.navigation.state.params.id).then((response)=>{
            
            this.setState({
                name: response.data.response[0].user_name,
                profilePicture: response.data.response[0].image
            }).catch(function(err){
                return err
            })
        })
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
        var children = this.state.children.map((child,i)=>{
            return(
                <View>
                <Text>{child.child_name}</Text>
                <Text>{child.age}</Text> 
                <Text onPress={()=>this.props.navigation.navigate('Children', {parentId: this.state.userId, child: child})}>View Profile</Text>  


                </View>
            )
        })
        return(
            <Container >
                <Header>
                    <Left >
                    <Icon name = "home" onPress = {()=>{
                    this.props.navigation.navigate('Dashboard', {id: this.state.userId})
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
                <Image source={{uri:this.state.profilePicture.toString()}}  style={{ borderWidth:.5, borderColor:'gray',  borderRadius: 60, width: 125, margin: 50, alignItems:'center', height: 125, justifyContent:'center'}}/>
                :
                <Icon name="add-user"/>}
               
                {this.state.canEdit ?
                <View>
                <Text >{this.state.name}</Text>
                <TextInput></TextInput>
                <Text>About</Text>
                <TextInput></TextInput>
                </View>
            :
            <View>
                <Text >{this.state.name}</Text>
                
             
                
                <Text>About</Text>
               
                </View>
            }
            </View>
            

            <View>
                {this.state.canEdit ? <Text onPress={()=>this.onSave()}>Save</Text> : <Text onPress={()=>this.onEdit()}>Edit</Text>}
                
            </View>
            <View>
            {children}
            </View>

           

            </Content>
            
            </Container>
        )
    }
}



import React,{Component} from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
import {View, Text, StyleSheet } from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right} from 'native-base';
import {GiftedChat} from 'react-native-gifted-chat';

export default class Chat extends Component{
    constructor(){
        super();

        this.state = {
            messages: [],
          }
    }

    componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
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
                    <Title>Chat</Title>
                </Body>
                <Right>
        
                </Right>
            </Header>
            <Content contentContainerStyle ={{
            flex: 1,
            justifyContent: 'flex-start'
            
        }}>
            <GiftedChat
                styles = {GiftedChat}
                messages={this.state.messages}
                onSend={(messages)=> this.onSend(messages)}
                user={{
                _id: 1,
        }}
      />
        </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    GiftedChat:{
        alignSelf: 'flex-start'
    }


})

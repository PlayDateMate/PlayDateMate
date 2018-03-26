import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body, Title, Right} from 'native-base'
       

import{
    StyleSheet, 
    Text,
    View,
    Slider
} from 'react-native';





export default class EventsSearch extends Component{
    
    
    
    constructor(props) {
        super(props);
        this.state = {
          value: 20,
          age: 7,
          distance: 50
        };
      }
    
    
    
      // SLIDER
      change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
      }


      getVal(val){
        console.warn(val);
        }     

    render(){
        const { value } = this.state;
        return(
                                    // Main Navigation
            <Container>
                <Header>
                    <Left>
                        <Icon name = "ios-menu" onPress = {() => {
                            this.props.navigation.navigate('DrawerOpen')
                            }}/>
                    </Left>

                    <Body>
                        <Title> Search Events </Title>
                    </Body>

                    <Right>

                    </Right>
                </Header>
                                    {/* // Main Navigation End */}
                
                
                <Content contentContainerStyle ={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View><Text>Search by:</Text></View>

                    <View style = {styles.ButtonContainer}>
                        <View style = {styles.ButtonBorder}><Text style = {{color: 'white', fontSize: 15 }}>Zip Code</Text></View>
                        <View style = {styles.ButtonBorder}><Text style = {{color: 'white', fontSize: 15 }}>Name</Text></View>
                    </View>
    




                                            {/* FILTER AGE SLIDER */}      
                    <View style = {{ marginTop: 20 }}><Text>Filter by Age Group</Text></View>
                    <View style={styles.container2}>
                        <Text style={styles.Number}>
                        {this.state.age}
                        </Text>            
                        <Slider
                        style={{ width: 300 }}
                        step={1}
                        minimumValue={2}
                        maximumValue={12}
                        value={this.state.age}
                        onValueChange={val => this.setState({ age: val })}
                        onSlidingComplete={ val => this.getVal(val)}
                        />
                    </View>



                                                {/* FILTER DISTANCE SLIDER */}
                    <View style = {{ marginTop: 20 }}><Text>Filter by distance</Text></View>
                    <View style={styles.container2}>
                        <Text style={styles.Number}>
                             {this.state.distance}
                        </Text>            
                        <Slider
                            style={{ width: 300 }}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.distance}
                            onValueChange={val => this.setState({ distance: val })}
                            onSlidingComplete={ val => this.getVal(val)}
                        />

                    </View>


                    <View style={styles.PlaceHolder}><Text>Input</Text></View>
                    <View style={styles.Results}><Text>Results</Text></View>
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
        marginTop: 10,
        width: 150,
        marginRight: 20
    },
    PlaceHolder:{
        flex: .1,
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
    Results:{
        flex:1,
        marginTop: 20,
        width: 300,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },

    // SLIDER STYLES
    container2: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    Number: {
        fontSize: 20,
        textAlign: 'center',
        // margin: 5,
      },
      
})



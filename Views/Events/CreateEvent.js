import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import axios from 'axios';


import{
    StyleSheet, 
    Text,
    View,
    Button,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { Container, Row } from 'native-base';


export default class CreateEvents extends Component{
    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            descriptionInput: '',
            startdateInput: '',
            enddateInput: '',
            minageInput: '',
            maxageInput: '',
            addressInput: '',
            cityInput: '',
            zipcodeInput: '',
            privacyInput: '',
            event: [],
                id: 1,
                event_name: '',
                event_description: '',
                start_date: '',
                end_date: '',
                age_min: '',
                age_max: '',
                address: '',
                city: '',
                zipcode: '',
                privacy: '',
                userId: 1
            
        }
    this.nameInput =  this.nameInput.bind(this);
    this.descriptionInput =  this.descriptionInput.bind(this);
    this.startdateInput =  this.startdateInput.bind(this);
    this.enddateInput =  this.enddateInput.bind(this);
    this.minageInput =  this.minageInput.bind(this);
    this.maxageInput =  this.maxageInput.bind(this);
    this.addressInput =  this.addressInput.bind(this);
    this.cityInput =  this.cityInput.bind(this);
    this.zipcodeInput =  this.zipcodeInput.bind(this);
    this.privacyInput =  this.privacyInput.bind(this);
    this.onPressButton = this.onPressButton.bind(this);
    }

    
    // componentDidMount() {
    //     axios.get('/api/events/:id').then( response => {
    //         let event = response.data
    //         this.setState({
    //             id: event.id, 
    //             event_name: event.event_name, 
    //             event_description: event.event_description, 
    //             start_date: event.start_date, 
    //             end_date: event.end_date, 
    //             age_min: event.age_min, 
    //             age_max: event.age_max, 
    //             address: event.address, 
    //             city: event.city, 
    //             zipcode: event.zipcode, 
    //             privacy: event.privacy 
    //         })
    //     }).catch(console.log)
    // }
    onPressButton() {
        console.log("this is the set state", this.state.event_name),
        axios.post('https://192.168.3.135:3001/api/events', {
           event_name: this.state.event_name, 
            event_description: this.state.event_description, 
            start_date: this.state.start_date, 
            end_date: this.state.end_date, 
            age_min: this.state.age_min, 
            age_max: this.state.age_max, 
            address: this.state.address, 
            city: this.state.city, 
            zipcode: this.state.zipcode, 
            privacy: this.state.privacy
            }).then((res) => {
            console.log(res.data);
                return res.data
            })
        }

        cancelEvent(){
        // console.log(this.props.match.params.id);
        axios.delete('https://192.168.3.177:3001/api/events/:id').then(response => {
            this.props.history.push('/Dashboard')
        }).catch(console.log)
    }

    nameInput(val) {
        console.log(val);
        this.setState({
            event_name: val
        })
        console.log("StateName:", this.state.event_name)
    }
    descriptionInput(val) {
        console.log(val);
        this.setState({
            event_description: val
        })
    }

    startdateInput(val) {
        console.log(val);
        this.setState({
            start_date: val
        })
    }
    enddateInput(val) {
        console.log(val);
        this.setState({
            end_date: val
        })
    }
    minageInput(val) {
        console.log(val);
        this.setState({
            age_min: val
        })
    }
    maxageInput(val) {
        console.log(val);
        this.setState({
            age_max: val
        })
    }
    addressInput(val) {
        console.log(val);
        this.setState({
            address: val
        })
    }
    cityInput(val) {
        console.log(val);
        this.setState({
            city: val
        })
    }
    zipcodeInput(val) {
        console.log(val);
        this.setState({
            zipcode: val
        })
    }
    privacyInput(val) {
        console.log(val);
        this.setState({
            privacy: val
        })
    }



    render(){
        let events = this.state.event;
        return(
            <Container>
               
                <TextInput
                onChangeText={(val) => this.nameInput(val)}
                style={styles.input} placeholder="Event Name" 
                /* type = 'text' */
                />
                <TextInput
                    onChangeText={(val) => this.descriptionInput(val)}
                    style={styles.input} placeholder="Event Description" 
                />
                <TextInput
                    onChangeText={(val) => this.startdateInput(val)}
                    style={styles.input} placeholder="Start Date"
                    /* type = "date"  */
                />
                <TextInput
                    onChangeText={(val) => this.enddateInput(val)}
                    style={styles.input} placeholder="End Date"
                    type = "date" 
                />
                <TextInput
                    onChangeText={(val) => this.maxageInput(val)}
                    style={styles.input} placeholder="Maximum age" 
                />
                <TextInput
                    onChangeText={(val) => this.minageInput(val)}
                    style={styles.input} placeholder="Minimum age" 
                />
                <TextInput
                    onChangeText={(val) => this.addressInput(val)}
                    style={styles.input} placeholder="Address" 
                />
                <TextInput
                    onChangeText={(val) => this.cityInput(val)}
                    style={styles.input} placeholder="City" 
                />
                <TextInput
                    onChangeText={(val) => this.zipcodeInput(val)}
                    style={styles.input} placeholder="Zipcode" 
                />
                
                <View style={styles.ButtonContainer}>
                    <TouchableHighlight style={styles.ButtonBorder} onPress={() => this.onPressButton()}>
                        <Text style={styles.buttonText}>
                            Create Event
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.ButtonBorder} onPress={this.cancelEvent.bind(this)}>
                        <Text style={styles.buttonText}>
                            Cancel
                        </Text>
                    </TouchableHighlight>
                </View>

            </Container>
          
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 60
    },
    ButtonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 50,
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

    input: {
      height: 40,
      marginTop: 10,
      padding: 4,
      fontSize: 14,
      borderWidth: 1,
      borderColor: 'grey',
      width: 300,
      marginLeft: 35
    },
    ButtonContainer:{
        justifyContent: 'center',
        flexDirection:'row'
    },
  });

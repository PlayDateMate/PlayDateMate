import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Imag } from 'react-native';

export default class CustomMarker extends Component{
  constructor(props){
    super(props)

    this.state ={
      propTypes: { pressed: PropTypes.bool },
    }
  }

  render() {
    return (
      <Image
        style={styles.image}
        source={this.props.pressed ? require('./ruby.png') : require('./diamond.png')}
        resizeMode='contain'
      />
    );
  }
};

var styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});



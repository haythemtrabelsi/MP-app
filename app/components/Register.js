import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import firebase from './Firebase' ;


export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
    fname: '',
    lname: '',
    username: '',
    password: ''
  }
}

  render() {
    return (
      <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}  >
          <Text style={styles.welcome}>Join our community!</Text>

          <TextInput
            style={styles.textinput}
            placeholder="First Name"
            onChangeText={(fname) => this.setState({fname})}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Last Name"
            onChangeText={(lname) => this.setState({lname})}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Username"
            onChangeText={(username) => this.setState({username})}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={this.register}>
            <Text style={styles.btntext}>Register</Text>
          </TouchableOpacity>

          <Text
            style={styles.instructions}
            onPress={() =>
            this.props.navigation.navigate('Home')
            }
            >Have an account? Login</Text>

      </KeyboardAwareScrollView >
    );
  }

  register = () => {

    // To Await 5 seconds to insert a new user
        setTimeout(() => {
            firebase.database().ref('users/001').set(
                {
                    name: this.state.fname + ' ' + this.state.lname ,
                    username: this.state.username,
                    password: this.state.password
                }
            ).then(() => {
                //show registration complete and redirect to projects view
            }).catch((error) => {
                //show error
            });
        }, 5000);

  }

}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F7EE',
    paddingLeft: 40,
    paddingRight: 40,
  },
  welcome: {
    fontSize: 28,
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
    color:'#2D3142',

  },
  instructions: {
    textAlign: 'center',
    color: '#2D3142',
    marginTop:10,
    marginBottom: 5,
  },
  textinput: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#2D3142',
    padding: 16,
    alignItems: 'center',
  },
  btntext: {
    color:'white',
  }
});

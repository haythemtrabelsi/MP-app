import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, TextInput, View, Button} from 'react-native';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    username: '',
    password: '',
  }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Login to get started!</Text>
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
            onPress={this.login}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>

          <Text
            style={styles.instructions}
            onPress={() =>
            this.props.navigation.navigate('Register')
            }
            >Don''t Have an account? Register now!</Text>

      </View>
    );
  }
  login = () => {
        alert('test');
  }
}

export default Login;

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
    margin: 5,
    alignItems: 'center',
  },
  btntext: {
    color:'white',
  }
});

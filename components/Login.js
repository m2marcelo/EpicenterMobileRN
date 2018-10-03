import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as strings from '../utils/constants';

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    }
  }

  UserLogin = () => {
    this.props.onLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image
            style={styles.logoContainer}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.labelBookingContainer}>
            {strings.BOOKING_ROOM}
          </Text>
          <Text style={styles.labelLoginContainer}>
            {strings.LOGIN}
          </Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="user-circle-o" size={24}  style={styles.inputIcon} />
            <TextInput style={styles.inputs}
                placeholder="Username"
                placeholderTextColor='white'
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="key-variant" size={24}  style={styles.inputIcon}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                placeholderTextColor='white'
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.UserLogin()}>
            <Text style={styles.loginText}>GO!</Text>
          </TouchableHighlight>
          <Text style={styles.labelForgotContainer}>
            {strings.FORGOT_PWD}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 119,
    height: 65,
    marginTop: 96,
    marginBottom: 34,
  },
  labelBookingContainer: {
    height: 16,
    width: 96,
    color: 'rgba(255,255,255,1)',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 16,
    marginBottom: 26,
  },
  labelLoginContainer: {
    height: 18,
    width: 48,
    color: 'rgba(255,255,255,1)',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
    marginBottom: 26.5,
  },
  inputContainer: {
      borderColor: 'rgba(234,235,245,1)',
      borderStyle: 'solid',
      backgroundColor: 'rgba(192,189,238,1)',
      borderRadius:4,
      borderWidth:1,
      width:288,
      height:42,
      marginBottom:23,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    marginLeft:5,
    padding:5,
    color: 'white'
  },
  buttonContainer: {
    height:41,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:23,
    marginBottom:61,
    width:125,
    borderRadius:5,
  },
  loginButton: {
    backgroundColor: 'rgba(54, 183, 143, 1)',
    shadowColor: 'rgba(165, 168, 201, 0.51)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    shadowRadius: -3,
  },
  loginText: {
    color: 'white',
  },
  labelForgotContainer: {
    height: 16,
    width: 130,
    color: 'rgba(255,255,255,1)',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    marginBottom: 122,
    textDecorationLine: 'underline',
  },
});

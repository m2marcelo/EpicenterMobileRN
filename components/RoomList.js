import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class RoomList extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  UserLogin = () => {
    //Alert.alert("Alert", "Button pressed "+viewId);
    this.props.onLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>RoomList</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  }
});

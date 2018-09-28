import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  FlatList
} from 'react-native';

const mapStateToProps = (state) => {
  console.log('rooms = ', state.auth.rooms);
  return {
    roomsList: state.auth.rooms,
  };
}

class RoomList extends Component {

  render() {
    let { roomsList } = this.props;
    if(!roomsList) {
      console.log('roomsList vazia ');
      return(
        <View style={styles.container}>
          <Text>
            Loading rooms...
          </Text>
        </View>
      );
    } else {
      console.log('roomsList preenchida = ', roomsList);
      return (
        <FlatList
          data={roomsList}
          renderItem={ ({item}) => <Text> {item.title} </Text> }

        />
      );
    }
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

export default connect(mapStateToProps)(RoomList);

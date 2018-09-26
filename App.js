import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './containers/Login';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={
          createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
        }>
        <View style={{flex: 1}}>
          <Login />
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

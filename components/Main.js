import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../containers/Login';
import RoomList from '../components/RoomList';

//receives the current store, current props, and what it
//returns will be available to MyComponent as props.
/*
mapStateToProps() allows you to specify which data from the store you want passed to your React component. It takes in the store's state, an optional ownprops argument, and returns an object.

const mapStateToProps = (state, props) => ({
  name: state.user.name,
  age: state.user.age
});
In the above example, both name and age will be available as props for the User component to access.
*/

const mapStateToProps = (state) => {
  console.log('state = ', state.auth.isLoggedIn);
  return {
    isLogged: state.auth.isLoggedIn,
  };
}
// allows you wrap action creators inside of dispatch. Let's take a closer look at each of them!
// const mapDispatchToProps = dispatch => ({
//
// });

class Main extends Component {

  render() {
    const { isLogged } = this.props;
    console.log('props = ', this.props);
      if (isLogged)
        return <RoomList />
      else
        return <Login />
    }
}

export default connect(mapStateToProps)(Main);

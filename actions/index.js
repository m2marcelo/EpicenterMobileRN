import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

const base64 = require('base-64');

// admin
// 8B6N7G9>X&WtN

export function login (username, password) {
  console.log('chamando o login = username = ', username, 'password = ', password);
  //authenticate(username, password);
  let session_url = 'http://stage.c5012.cloudnet.se/api/v1/rooms';
  let credentials = base64.encode('admin' + ':' + '8B6N7G9>X&WtN');
  console.log('credentials = ', credentials)
  let basicAuth = 'Basic ' + credentials;
  console.log('basicAuth = ', basicAuth)
  return (dispatch) =>axios.get(session_url, {
      headers: { 'Authorization': basicAuth }
    }).then(res => {
        console.log(res);
        console.log(res.data);
        dispatch({
          type: LOGIN_SUCCESS,
          username,
          password
        });
    }).catch(e=> {
      console.log('error ', e);
      dispatch ({
        type: LOGIN_FAILURE
      });
    });
}

export function logout () {
  return {
    type: LOGOUT
  }
}

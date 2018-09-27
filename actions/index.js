import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';
export const ROOMS_LIST = "ROOMS_LIST";

const base64 = require('base-64');

// admin
// 8B6N7G9>X&WtN

export function login (username, password) {
  let session_url = 'http://stage.c5012.cloudnet.se/api/v1/rooms';
  let credentials = base64.encode('admin' + ':' + '8B6N7G9>X&WtN');
  let basicAuth = 'Basic ' + credentials;
  return (dispatch) =>axios.get(session_url, {
      headers: { 'Authorization': basicAuth }
    }).then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username,
            password,
          }
        });
        dispatch({
          type: ROOMS_LIST,
          payload: {
            rooms: res.data._embedded.rooms
          }
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

const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export default function auth(state = defaultState, action) {
  console.log('got in the reducer - action.type = ', action.type)
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                state,
                isLoggedIn: true,
                payload: action.payload,
                username: action.username,
                password: action.password
            }
        case 'LOGOUT':
            return {
                state,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        default:
            return state
    }
}

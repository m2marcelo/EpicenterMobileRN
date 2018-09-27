const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    rooms: {}
};

export default function auth(state = defaultState, action) {
  console.log('got in the reducer - action.payload = ', action.payload)

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
                password: action.payload.password
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: '',
                rooms: {}
            }
        case 'ROOMS_LIST':
          return {
            ...state,
            rooms: action.payload.rooms
          }
        default:
            return state
    }
}

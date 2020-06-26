export const initialState = {
    name: '',
    email: '',
    userId: null,
    isLoggedIn: false,
    favSongs: []
}

export const userReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type){
        case 'USER_LOGIN_START':
            return {
                ...state,
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                userId: action.payload
            }
        default:
            return state;
    }
}


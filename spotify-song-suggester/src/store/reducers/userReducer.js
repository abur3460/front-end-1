export const initialState = {
    email: '',
    userId: null,
    isLoggedIn: false,
    favSongs: []
}

export const userReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type){
        default:
            return state;
    }
}


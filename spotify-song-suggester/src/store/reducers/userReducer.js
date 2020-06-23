export const initialState = {
    name: '',
    userId: null,
    favSongs: []
}

export const userReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type){
        default:
            return state;
    }
}


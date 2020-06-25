export const initialState = {
    name: '',
    userId: null,
    isFetching: false,
    favSongs: []
}

export const userReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type){
        default:
            return state;
    }
}


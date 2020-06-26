import axios from 'axios';

export const fetchSongs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SONG_START'})
    }
}
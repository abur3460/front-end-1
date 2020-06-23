import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const MusicList = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/songs')
        .then(res => setSongs(res.data))

    }, [])

    return (
        <div>
            <h1>yo!</h1>
            {songs.map(song => (
                <h1>{song.track_name}</h1>
            ))}
        </div>
    )
}

export default MusicList
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
        <div className='songs-page'>
            {songs.map(song => (
                <div className='songCard'>
                    <p>{song.track}</p>
                    <p>by <em>{song.artist_name}</em></p>
        </div>       
            ))}
        </div>
    )
}

export default MusicList
import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// import "./SongComponent.css"

const MusicList = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/songs')
        .then(res => {
          console.log(res.data)
          setSongs(res.data)
        })
    }, [])

    return (
      <div className="songs-page">
      {songs.map(song => (
        <div className="songCard">
          <p>{song.track_name}</p>
          <p>by <em>{song.artist_name}</em></p>
        </div>
      ))}
    </div>
    )
}

export default MusicList
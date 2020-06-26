import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import "./MusicList.css"

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
          <div className="track-name">
            <p>{song.track_name}</p>
          </div>
          <div className="artist">
            <p><em>{song.artist_name}</em></p>
          </div>
          <div className="button">
            <button className="favorite" title="Add to library">+</button>
          </div>
        </div>
      ))}
    </div>
    )
}

export default MusicList
import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import "./MusicList.css"


function searchFor(query){
    return function(song){
        return song.track_name.toLowerCase().includes(query.toLowerCase()) || !query;
    }
}


const MusicList = () => {

    const [songs, setSongs] = useState([])

    const [values, setValues] = useState('');

    const handleChanges = e => {
      setValues({
          [e.target.name]: e.target.value
      })
    }

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('/songs')
    //     .then(res => {
    //       console.log('yo', res.data)
    //       setSongs(res.data)
    //     })
    //     .catch(err => {
    //         console.log('yo', err)
    //     })
    // }, [])

    // axiosWithAuth()
    // .get('/')

    const onClick = () => {
      axiosWithAuth()
      .get('/songs')
      .then(res => {
          console.log('values:', values.value)
          console.log('yo', res.data)
          
          const results = res.data.filter(
              searchFor(values.value)
          )
          console.log('results:', results)
          setSongs(results)
      })
      .catch(err => console.log('something is wrong', err.message))
    }

    return (
    <div className="songs-page">
      <div className="search">
        <input
          type='text'
          name='value'
          value={values.value}
          onChange={handleChanges}
          className="song-field"
          placeholder='Enter song title!'
        />
        {console.log('yo', songs.map(song => song))}
        <button className="search-button" onClick={onClick}>Search!</button>
      </div>
      {songs.map(song => (
        <div className="songCard">
          <div className="track-name" key={song.id}>
            <p>{song.track_name}</p>
          </div>
          <div className="artist">
            <p><em>{song.artist_name}</em></p>
          </div>
          <div className="add-button">
            <button className="favorite" title="Add to library">+</button>
          </div>
        </div>
      ))}
    </div>
    )
}

export default MusicList
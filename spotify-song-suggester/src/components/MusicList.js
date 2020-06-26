import React, { useEffect, useState } from 'react';
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
          <input
           type='text'
           name='value'
           value={values.value}
           onChange={handleChanges}
           placeholder='Enter song title!'
          />
          {console.log('yo', songs.map(song => song))}
          <button onClick={onClick}>Search!</button>
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
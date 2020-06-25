import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// import "./SongComponent.css"



const MusicList = () => {

    const [songs, setSongs] = useState([])

    const [values, setValues] = useState({
        value: ''
    });

    const handleChanges = e => {
        setValues({
            ...values,
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

    const onClick = () => {
        axiosWithAuth()
        .get('/songs')
        .then(res => {
            console.log('values:', values)
            console.log('yo', res.data)
            
            const results = res.data.map(song => {
                return song.title
            });
            console.log('results:', results)
            setSongs(results)
        })
    }


    return (

      <div className="songs-page">
          <input
           type='text'
           name='inputValues'
           value={values.inputValue}
           onChange={handleChanges}
           placeholder='Enter song title!'
          />
          {console.log('yo', songs.map(song => song))}
          <button onClick={onClick}>Search!</button>
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
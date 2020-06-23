import React from "react";

const SongComponent = () => {

  const songs = [{
    track_name: "song",
    artist_name: "artist"
  }, {
    track_name: "song2",
    artist_name: "artist2"
  }, {
    track_name: "song3",
    artist_name: "artist3"
  }];

  return (
    <div>
      {songs.map(song => (
        <div>
          <p>{song.track_name}</p>
          <p>{song.artist_name}</p>
        </div>
      ))}
    </div>
  )
}

export default SongComponent;
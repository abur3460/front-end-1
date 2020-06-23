import React from "react";
import "./Navigation.css";


const Navigation = () => {

  return (
    <div className="navBar">
      <h3>Spotify Song Suggester</h3>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Songs</a></li>
          <li><a href="#">Playlists</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {

  return (
    <div className="navBar">
      <h3>Spotify Song Suggester</h3>
      <nav>
        <ul>
          <li><a hreg="#">Home</a></li>
          <li><Link to="/songs">Songs</Link></li>
          <li><a href="#">Playlists</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
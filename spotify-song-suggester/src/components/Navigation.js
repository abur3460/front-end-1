import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {

  const history = useHistory();

  const logoutUser = () => {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <div className="navBar">
      <h3>Spotify Song Suggester</h3>
      <nav>
        <Link to="#">Songs</Link>
        <Link to="/songs">Your Library</Link>
        <Link to="#">Playlists</Link>
        <Link to="/" onClick={logoutUser}>Logout</Link>
        {/* <ul>
          <li><a hreg="#">Songs</a></li>
          <li><Link to="/songs">Your Library</Link></li>
          <li><a href="#">Playlists</a></li>
          <li><Link to='/' onClick={logoutUser}>Logout</Link></li>
        </ul> */}
      </nav>
    </div>
  )
}

export default Navigation;
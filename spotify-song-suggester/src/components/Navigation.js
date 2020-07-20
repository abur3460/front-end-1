import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  const logoutUser = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="navBar">
      <h3>Spotify Song Suggester</h3>
      <nav>
        <ul>
          <li>
            <a hreg="#">Songs</a>
          </li>
          <li>
            <Link to="/songs">Your Library</Link>
          </li>
          <li>
            <a href="#">Playlists</a>
          </li>
          <li>
            <Link to="/" onClick={logoutUser}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

import React, { Component } from "react";
import { useHistory, Link } from "react-router-dom";
import { FaSearch, FaHeart, FaSpotify } from "react-icons/fa";
import MusicList from "./MusicList";
import Navigation from "./Navigation";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  render() {
    return (
      <main>
        <Navigation />
        <MusicList />
      </main>
    );
  }
}

export default HomePage;

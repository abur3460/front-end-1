import React, { Component, setState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FaSearch, FaHeart, FaSpotify } from "react-icons/fa";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      loggedIn: false,
    };
  }
  showRegister = () => {
    setState({ login: false });
  };
  showLogin = () => {
    setState({ login: true });
  };
  render() {
    return this.state.loggedIn ? (
      <HomePage />
    ) : this.state.login ? (
      <LoginForm showRegister={this.showRegister} />
    ) : (
      <RegisterForm showLogin={this.showLogin} />
    );
  }
}

export default Landing;

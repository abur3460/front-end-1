import React from "react";
import "./App.css";
import "./scss/index.scss";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Landing from "./components/Landing";
import MusicList from "./components/MusicList";
import Account from "./components/Account";
import PrivateRoute from "./utils/PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={HomePage} />
      <Switch>
        <Route path="/register" component={RegisterForm} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;

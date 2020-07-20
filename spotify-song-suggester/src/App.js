import React from "react";
import "./App.css";
import "./scss/index.scss";
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MusicList from "./components/MusicList";
import EditUser from "./components/EditForm";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/songs" component={MusicList} />
      <Switch>
        <Route path="/register" component={RegisterForm} />
      </Switch>
      <Route path="/edit" component={EditUser} />
      <Switch>
        <PrivateRoute exact path="/" component={MusicList} />
      </Switch>
    </Router>
  );
}

export default App;

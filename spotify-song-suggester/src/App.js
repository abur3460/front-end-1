import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MusicList from "./components/MusicList";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/songs" component={MusicList} />
        <Route exact path="/" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </div>
      <Switch>
        <PrivateRoute path="/hub" component={MusicList} />
        <PrivateRoute path='/edit' component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
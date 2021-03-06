import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MusicList from "./components/MusicList";
import EditUser from './components/EditForm';
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/songs" component={MusicList} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path='/edit' component={EditUser} />
      </div>
      <Switch>
        <PrivateRoute exact path="/" component={MusicList} />
      </Switch>
    </Router>
  );
}

export default App;
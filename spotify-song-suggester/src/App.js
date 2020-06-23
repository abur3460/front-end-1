import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PrivateRoute from './utils/PrivateRoute'
import MusicList from './components/MusicList'

function App() {
  return (
    <Router>
      <div>
      </div> 

      

      <Switch>
        <PrivateRoute exact path='/hub' component={MusicList} />
        <Route exact path ='/' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </Router>
  )
}

export default App;

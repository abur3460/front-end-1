import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Link to='/login'>Home</Link>
      </div>
      <div><Link>Login</Link></div>

      <Switch>
      </Switch>
    </Router>
  )
}

export default App;

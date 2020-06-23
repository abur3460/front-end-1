import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation}/>
        {/* <LoginForm /> */}
        <Route exact path="/" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import SeeClasses from './pages/SeeClasses';
import NotFound from './pages/NotFound';

export default function App() {
  return (

    <Router>
      
      <Switch>

        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/seeclasses" component={ SeeClasses } />
        
        <Route component={ NotFound } />

      </Switch>
      
    </Router>

  );
}
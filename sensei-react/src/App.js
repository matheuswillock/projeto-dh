import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import ViewClasses from './pages/ViewClasses';

export default function App() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/search" component={ Search } />
      <Route path="/viewclasses" component={ ViewClasses } />
    </BrowserRouter>

  );
}
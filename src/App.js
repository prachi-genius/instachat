import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Router from './components/Router'
import {BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
    <div>
     
    <Nav />
    <Router />
    
     
    </div>
    </BrowserRouter>
  );
}

export default App;



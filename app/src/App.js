import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutBoardMembers from './Components/AboutBoardMembers/aboutBoardMembers';
import LandingPage from './Components/LandingPage/Landing';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/about" component={AboutBoardMembers}/>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

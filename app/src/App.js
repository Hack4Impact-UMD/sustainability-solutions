import AboutBoardMembers from "./Components/AboutBoardMembers/aboutBoardMembers";
import Contact from "./Components/Contact/contact.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutBoardMembers from './Components/AboutBoardMembers/aboutBoardMembers';
import LandingPage from './Components/LandingPage/Landing';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Mission from './Components/Mission/Mission';
import Projects from './Components/Projects/Projects';
import News from './Components/News/News';
import Donations from './Components/Donations/Donations';
import Footer from './Components/Footer/Footer';

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
          <Route exact path="/mission" component={Mission}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route exact path="/donations" component={Donations}/>
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

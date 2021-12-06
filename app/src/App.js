import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import AboutBoardMembers from './Components/AboutBoardMembers/aboutBoardMembers';
import LandingPage from './Components/LandingPage/Landing';
import Contact from "./Components/Contact/contact.js";
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
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
          <Route exact path="/ourteam" component={AboutBoardMembers}/>
          <Route exact path="/about" component={About}/>
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

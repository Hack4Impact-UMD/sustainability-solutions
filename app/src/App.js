import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutBoardMembers from './Components/AboutBoardMembers/aboutBoardMembers.js';
import LandingPage from './Components/LandingPage/landingPage.js';
import Navbar from './Components/Navbar/navbar.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/aboutBoardMembers" component={AboutBoardMembers}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

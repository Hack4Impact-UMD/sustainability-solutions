import AboutBoardMembers from './Components/AboutBoardMembers/aboutBoardMembers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
      <div className="app">
        <Switch>
          <Route exact path="/aboutBoardMembers" component={AboutBoardMembers}/>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

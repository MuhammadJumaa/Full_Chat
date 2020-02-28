import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Head from './Head';
import LeftBar from './LeftBar';
import Videos from './Videos';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>
      <Head/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="mainpage">
              <LeftBar/>
              <Search/>
            </div>
          </Route>
          <Route path="/">
            <div className="mainpage">
              <LeftBar/>
              <Videos/>
            </div>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

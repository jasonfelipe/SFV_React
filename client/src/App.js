import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";

const App = () => (
  <Router>
    <div className='content'>
        <Switch>
          <Route exact path ='/' component={Main} />
        </Switch>
    </div>
  </Router>
)
export default App;

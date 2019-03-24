import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Ryu from "./pages/Ryu";

const App = () => (
  <Router>
    <div className='content'>
        <Switch>
          <Route exact path ='/' component={Main} />
          <Route path='/Ryu' component={Ryu} />
        </Switch>
    </div>
  </Router>
)
export default App;

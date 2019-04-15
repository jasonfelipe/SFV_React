import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Combo from "./pages/Combo";

const App = () => (
  <Router>
    <div className='content'>
        <Switch>
          <Route exact path ='/' component={Main} />
          <Route path='/combo' component = {Combo} />
        </Switch>
    </div>
  </Router>
)
export default App;

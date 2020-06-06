import React from 'react';
import Header from './components/Header'
import AddRoutine from './components/AddRoutine'
import Routines from './components/Routines'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <AddRoutine />
        <Switch>
          <Route exact path="/">
            <Routines />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;

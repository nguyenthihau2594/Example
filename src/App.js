import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom';

import List from './components/pages/Listpage/Listpage';
import Guide from './components/pages/Guide/Guide';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Switch>
          <Route path="/" component={List} exact />
          <Route path="/guide" component={Guide} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;

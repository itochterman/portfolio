import React from 'react';
import Poems from './Poems'
import Home from './Home'
import About from './About'
import Tech from './Tech'

import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path ="/about" component ={About} />
      <Route path = "/poems" component = {Poems} />
      <Route path = "/tech" component = {Tech} />

    </Switch>
    </main>
  );
}

export default App;


import React from 'react';
import MemeGenerator from './MemeGenerator';
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path ="/about" component ={About}/>
    </Switch>
    </main>
  );
}

export default App;


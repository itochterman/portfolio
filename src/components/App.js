import React from "react";
import Poems from "./Poems";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/mypoems" component={Poems} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default App;

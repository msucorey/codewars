import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {
  Switch,
  Route
} from "react-router-dom";

// TODO install Typescript
// TODO install Prettier

const App = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;

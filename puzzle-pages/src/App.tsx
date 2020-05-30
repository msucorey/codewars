import * as React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {
  Switch,
  Route
} from "react-router-dom";
import HistoryOfTheWorld from './pages/HistoryOfTheWorld/HistoryOfTheWorld';

// TODO install Prettier

const App = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/hotw">
      <HistoryOfTheWorld />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;

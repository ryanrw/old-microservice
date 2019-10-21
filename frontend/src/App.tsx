import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Index } from "./pages";
import { Example } from "./commons";

export const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Example />

      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

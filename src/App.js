import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tabs from "./components/Tab-menu/Tabs";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/channel/:tab?" component={Tabs} />
      </Switch>
    </Router>
  );
}

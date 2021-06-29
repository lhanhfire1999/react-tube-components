import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tabs from "./components/Tab-menu/Tabs";
import Tabs2 from "./components/Tab-menu/Tabs2";
export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/channel/:params?" component={Tabs2} /> */}
        <Route exact path="/channel/:tab?" component={Tabs} />
        {/* <Route exact path="/channel/" component={Tabs} /> */}
      </Switch>
    </Router>
  );
}

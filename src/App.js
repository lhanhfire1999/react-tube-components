import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Tabs, TabList} from "./components/";
// import Tabs2 from "./components/Tab-menu/Tabs2";
export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/channel/:params?" component={Tabs2} /> */}
        <Route exact path="/tablist" component={TabList} />
        <Route exact path="/channel/:id?/:tab?" component={Tabs} />
        {/* <Route exact path="/channel/" component={Tabs} /> */}
      </Switch>
    </Router>
  );
}

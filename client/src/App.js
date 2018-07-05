import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/create-event" component={Events}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

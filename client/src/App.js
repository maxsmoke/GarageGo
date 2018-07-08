import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import CreateProfile from "./pages/CreateProfile";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/profile" component={CreateProfile}/>
        <Route exact path="/create-event" component={CreateEvent}/>
        <Route exact path="/event-detail" component={EventDetail}/>>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

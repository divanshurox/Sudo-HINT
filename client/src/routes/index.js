import React from "react";
import { Switch } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PeerCodeRoom from "../pages/PeerCodeRoom";
import Route from "./Route";

const Routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/coderoom" component={PeerCodeRoom} />
      </Switch>
    </div>
  );
};
export default Routes;

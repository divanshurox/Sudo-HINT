import React from "react";
import { Switch } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PeerCodeRoom from "../pages/PeerCodeRoom";
import Forum from "../pages/Forum";
import Route from "./Route";
import ForumExplore from "../pages/ForumExplore";
import LearningPath from "../pages/LearningPath";
import LearningPathDetail from "../pages/LearningPathDetail";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forums" component={ForumExplore} />
        <Route exact path="/forum/id" component={Forum} />
        <Route exact path="/coderoom" component={PeerCodeRoom} />
        <Route exact path="/learningpath" component={LearningPath} />
        <Route exact path="/learningpath/id" component={LearningPathDetail} />
      </Switch>
    </div>
  );
};
export default Routes;

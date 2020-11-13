import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";
import Post from "./Components/Post";
import Form from "./Components/Form";

export default (
  <Switch>
    <Route path="/" exact component={Auth} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Post/:id" component={Post} />
    <Route path="/New" component={Form} />
  </Switch>
);

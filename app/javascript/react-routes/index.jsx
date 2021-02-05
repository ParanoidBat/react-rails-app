import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home'
import NewUserForm from '../components/NewUserForm'
import Users from '../components/Users'

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewUserForm} />
      <Route path="/users" exact component={Users} />
    </Switch>
  </Router>
);
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home'
import NewUserForm from '../components/NewUserForm'
import Users from '../components/Users'
import ShowUser from '../components/ShowUser'
import EditUserForm from '../components/EditUserForm'
import Login from '../components/Login/Login'

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewUserForm} />
      <Route path="/users" exact component={Users} />
      <Route path="/user/:id" exact component={ShowUser} />
      <Route path="/user/:id/edit" exact component={EditUserForm} />
      <Route path="/login" exact component={Login}/>
    </Switch>
  </Router>
);
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import Home from "routes/Home";
import SignIn from "routes/SignIn";
import SignUp from "routes/SignUp";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/about">
          <All />
        </Route>
        <Route exact path="/sneakers">
          <Sneakers />
        </Route>
        <Route exact path="/boots">
          <Boots />
        </Route>
        <Route exact path="/sandals">
          <Sandals />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route> */}
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

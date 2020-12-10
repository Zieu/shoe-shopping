import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "routes/Home";
import Navbar from "components/Navbar/Navbar";

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
        </Route>
        <Route exact path="/signup">
          <SignUn />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

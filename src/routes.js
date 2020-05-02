import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function Routes() {
  const logged = false;

  return (
    <BrowserRouter>
      <Switch>
        {
          logged ? (
            <Route path="/profile" component={Profile} />
          ) : (
            <>
              <Route path="/" exact component={Landing} /> 
              <Route path="/login" exact component={Login} />
              <Route path="/register" component={Register} />
            </>
          )
        }
        
      </Switch>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Atendimento from "./pages/Atendimento";

import Login from "./pages/Login";
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
              <Route path="/" exact component={Home} /> 
              <Route path="/quem_somos" component={QuemSomos} />  
              <Route path="/atendimento" component={Atendimento} /> 
              <Route path="/login" component={Login} />
            </>
          )
        }
        
      </Switch>
    </BrowserRouter>
  );
}

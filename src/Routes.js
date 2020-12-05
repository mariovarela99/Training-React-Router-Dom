import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Home";
import Page1 from "./Página 1";
import Page2 from "./Página 2";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Route exact path="/" component={HomePage} />
          <Route path="/Page1" component={Page1} />
          <Route path="/Page2" component={Page2} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

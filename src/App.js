import React from "react";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <h1>home</h1>
      </Route>
      <Route path="/favorites" exact>
        favorites
      </Route>
      <Route>
        This is 404 page
      </Route>
    </Switch>
  );
}

export default App;

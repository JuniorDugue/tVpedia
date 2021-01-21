import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Favorites from "./components/pages/Favorites";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route>
          <p>This is 404 page</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

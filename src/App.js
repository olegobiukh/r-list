import "./index.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./router";
import uid from "uid";

function App() {
  const newRoutes = routes.map((item) => (
    <Route key={uid()} exact path={item.url} component={item.component} />
  ));

  return (
    <Router>
      <main className={`app`}>
        <Switch>{newRoutes}</Switch>
      </main>
    </Router>
  );
}

export default App;

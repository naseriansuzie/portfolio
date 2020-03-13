import React from "react";
import { Route, Switch } from "react-router-dom";
import { Project, Me } from "./pages";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Route exact path="/" component={Project} />
        <Switch>
          <Route path="/project" component={Project} />
          <Route path="/me" component={Me} />
        </Switch>
      </div>
    </>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Project, About } from "./pages";
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
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </>
  );
};

export default App;

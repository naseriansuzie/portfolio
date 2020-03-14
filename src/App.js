import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Project, Me } from "./pages";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [currentLink, setCurrentLink] = useState("project");
  return (
    <>
      <div className="app-container">
        <Header currentLink={currentLink} setCurrentLink={setCurrentLink} />
        <div className="space"></div>
        <Route exact path="/portfolio" component={Project} />
        <Switch>
          <Route path="/portfolio/project" component={Project} />
          <Route
            path="/portfolio/me"
            render={() => <Me setCurrentLink={setCurrentLink} />}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;

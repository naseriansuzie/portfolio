import React from "react";
import ProjectView from "./ProjectView";
import ProjectDesc from "./ProjectDesc";
import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="project-unit">
      <ProjectView
        id={project.id}
        gifs={project.gifs}
        gifDirection={project.gifDirection}
      />
      <ProjectDesc {...project} />
    </div>
  );
};

export default Project;

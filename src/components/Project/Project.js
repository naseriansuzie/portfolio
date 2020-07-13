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

// 영어 표현(만화, 시리즈), 논문 리뷰, 인스타 그램 영어 표현 등을 프로젝트로 담기

export default Project;

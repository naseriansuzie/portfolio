import React from "react";
import "./projectView.css";

const ProjectView = ({ id, gifs, gifDirection }) => (
  <div className="projectView-container">
    {gifs.map((gif, idx) => (
      <div
        className={gifDirection === "vertical" ? "vertical" : "horizontal"}
        key={`${id}_${idx}`}
      >
        <img className="gif" alt="" src={gif.uri} />
        <div>{gif.text}</div>
      </div>
    ))}
  </div>
);

export default ProjectView;

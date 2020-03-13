import React from "react";
import { FaGithub, FaAndroid, FaApple } from "react-icons/fa";
import "./projectDesc.css";

const ProjectDesc = ({
  name,
  position,
  duration,
  gitHub,
  android,
  ios,
  desc,
  stack,
  contribution,
}) => {
  return (
    <div className="projectDesc-container">
      <div className="paddingBottom">
        <div>
          <span className="project-name">{name}</span>
          <span className="font25 bold">{`[${position}]`}</span>
        </div>
        <div className="font20 due">{duration}</div>
        <div>
          <span>
            <FaGithub size={20} />
          </span>
          <span className="font20">
            {
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            }
          </span>
        </div>
        {android && (
          <div className="font20">
            <span>
              <FaAndroid size={20} />
            </span>
            <span>
              {
                <a href={android} target="_blank" rel="noopener noreferrer">
                  Android
                </a>
              }
            </span>
          </div>
        )}
        {ios && (
          <div className="font20">
            <span>
              <FaApple size={20} />
            </span>
            <span>
              {
                <a href={ios} target="_blank" rel="noopener noreferrer">
                  Ios
                </a>
              }
            </span>
          </div>
        )}
      </div>
      <div className="paddingBottom">
        <div className="font25 bold">Description</div>
        <div className="font20 paddingLeft1">{desc}</div>
      </div>
      <div className="paddingBottom">
        <div className="font25 ">Stack</div>
        <div className="font22 paddingLeft1">{stack}</div>
      </div>
      <div>
        <span className="font25 bold">Contribution</span>
        {contribution.map((work, idx) => (
          <div className="font20 paddingLeft1" key={idx}>
            - {work}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectDesc;

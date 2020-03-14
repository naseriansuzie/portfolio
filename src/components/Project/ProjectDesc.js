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
          <span className="font20 bold">{`[${position}]`}</span>
        </div>
        <div className="font16 due">{duration}</div>
        <div>
          <span>
            <FaGithub size={18} />
          </span>
          <span className="font16">
            {
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            }
          </span>
        </div>
        {android && (
          <div className="font16">
            <span>
              <FaAndroid size={18} />
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
          <div className="font16">
            <span>
              <FaApple size={18} />
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
        <div className="font20 bold">Description</div>
        <div className="font16 paddingLeft1">{desc}</div>
      </div>
      <div className="paddingBottom">
        <div className="font20 ">Stack</div>
        <div className="font18 paddingLeft1">{stack}</div>
      </div>
      <div>
        <span className="font20 bold">Contribution</span>
        {contribution.map((work, idx) => (
          <li className="font16 paddingLeft1" key={idx}>
            {work}
          </li>
        ))}
      </div>
    </div>
  );
};
export default ProjectDesc;

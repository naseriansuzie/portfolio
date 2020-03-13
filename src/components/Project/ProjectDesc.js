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
      <div>
        <div>
          <span>{name}</span>
          <span>{`[${position}]`}</span>
        </div>
        <div>{duration}</div>
        <div>
          <span>
            <FaGithub />
          </span>
          <span>
            {
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            }
          </span>
        </div>
        {android && (
          <div>
            <span>
              <FaAndroid />
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
          <div>
            <span>
              <FaApple />
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
      <div>{`description: ${desc}`}</div>
      <div>{`stack : ${stack}`}</div>
      <div>
        <span>contribution :</span>
        {contribution.map((work, idx) => (
          <div key={idx}>- {work}</div>
        ))}
      </div>
    </div>
  );
};
export default ProjectDesc;

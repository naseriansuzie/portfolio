import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ currentLink, setCurrentLink }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Link
          className="name"
          to="/portfolio"
          onClick={() => setCurrentLink("project")}
        >
          SEUNGSU KIM
        </Link>
        <p>English Learning Content Creator</p>
      </div>
      <div className="header-right">
        <span className="hide">
          <Link
            className={currentLink === "project" ? "link underLine" : "link"}
            to="/portfolio/project"
            onClick={() => setCurrentLink("project")}
          >
            Project
          </Link>
        </span>
        <span>
          <Link
            className={currentLink === "me" ? "link underLine" : "link"}
            to="/portfolio/me"
            onClick={() => setCurrentLink("me")}
          >
            Me
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

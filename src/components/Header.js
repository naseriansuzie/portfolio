import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [currentLink, setCurrentLink] = useState("project");
  return (
    <div className="header-container">
      <div className="header-left">
        <Link className="name" to="/">
          SOOJI KIM
        </Link>
        <p>성장을 즐기고, 가치를 만들어 가는 개발자</p>
      </div>
      <div className="header-right">
        <span
          style={{
            textDecoration: "none",
          }}
        >
          <Link
            className={currentLink === "project" ? "link underLine" : "link"}
            to="/project"
            onClick={() => setCurrentLink("project")}
          >
            Project
          </Link>
        </span>
        <span>
          <Link
            className={currentLink === "me" ? "link underLine" : "link"}
            to="/me"
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

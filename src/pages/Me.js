import React, { useEffect } from "react";
import Introduction from "../components/Me/Introduction";
import Resume from "../components/Me/Resume";
import "./me.css";

const Me = ({ setCurrentLink }) => {
  useEffect(() => {
    setCurrentLink("me");
  });
  return (
    <div className="me-container">
      <Introduction />
      <Resume />
    </div>
  );
};

export default Me;

import React, { useEffect } from "react";
import Introduction from "../components/Me/Introduction";
import Resume from "../components/Me/Resume";

const Me = ({ setCurrentLink }) => {
  useEffect(() => {
    setCurrentLink("me");
  });
  return (
    <div style={{ display: "flex" }}>
      <Introduction />
      <Resume />
    </div>
  );
};

export default Me;

import { Link } from "react-router-dom";
import Split from "react-split";
import ProblemDesc from "./ProbDesc";
import "../styles/workspace.css";
import React from "react";

const Workspace = () => {
  return (
    <Split className="split">
      <ProblemDesc />
      <div>The Code Editor will be here</div>
    </Split>
  );
};

export default Workspace;

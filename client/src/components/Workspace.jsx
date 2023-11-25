import { Link } from "react-router-dom";
import Split from "react-split";
import ProblemDesc from "./IDE/ProbDesc";
import "../styles/workspace.css";
import React from "react";
import IDEbar from "./IDE";

const Workspace = () => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDesc />
      <IDEbar />
    </Split>
  );
};

export default Workspace;

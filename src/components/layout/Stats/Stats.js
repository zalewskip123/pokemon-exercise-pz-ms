import React from "react";
import "./Stast.css";

function Stats({children}) {
  return (
    <main className="stats">
      <div className="sidebar" />
      <div className="statsdiv">{ children }</div>
      <div className="sidebar" />
    </main>
  );
}

export default Stats;

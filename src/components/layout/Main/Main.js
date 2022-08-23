import React from "react";
import "./Main.css";

function Main({children}) {
  return (
    <main className="Main">
      <div className="sidebar" />
      <div className="maindiv">{ children }</div>
      <div className="sidebar" />
    </main>
  );
}

export default Main;

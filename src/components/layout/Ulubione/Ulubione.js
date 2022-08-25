import React from "react";
import "./Ulubione.css";

function Ulubione({children, props}) {
  return (
    <main className="Ulubione">
      <div className="sidebar" />
      {console.log(props.dataFv)}
      <div className="ulubionediv">{ children }</div>
      <div className="sidebar" />
    </main>
  );
}

export default Ulubione;

import React from "react";
import "./Ulubione.css";

function Ulubione({children}) {
  return (
    <main className="Ulubione">
      <div className="sidebar" />
      {console.log(JSON.parse(localStorage.getItem("idFP")))}
      {console.log(JSON.parse(localStorage.getItem("pokename")))}
      <div className="ulubionediv">{ children }</div>
      <div className="sidebar" />
    </main>
  );
}

export default Ulubione;

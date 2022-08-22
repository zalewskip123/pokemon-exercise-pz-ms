import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
    <img src={require("../../../images/poke.png")} alt="poke" width="40%" height = "90%"/>
      <div>
        <h3> By Mikołaj Studencki and Piotr Zalewski </h3>
      </div>
        <div classname= "pages">
          <a href="/">PokeDex</a>
          <a href="/ulubione">Ulubione</a>
        </div>
      </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
    <img src={require("../../../images/poke.png")} alt="poke" width="40%" height = "90%"/>
      <div>
        <h3> By Mikołaj Studencki and Piotr Zalewski </h3>
      </div>
        <div className= "pages">
          <Link to="/">PokeDex</Link>
          <Link to="/Ulubione">Ulubione</Link>
        </div>
      </div>
  );
}

export default Navbar;

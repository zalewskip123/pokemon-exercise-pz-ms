import React from "react";

import "./App.css";

import Navbar from "./components/layout/Navbar/NavBar";
import Main from "./components/layout/Main/Main";
import PokemonList from "./components/pokemon/PokemonList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <PokemonList />
      </Main>
    </div>
  );
}

export default App;

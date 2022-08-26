import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar/NavBar";
import Main from "./components/layout/Main/Main";
import PokemonList from "./components/pokemon/PokemonList";
import Ulubione from "./components/layout/Ulubione/Ulubione";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Main>
                <PokemonList/>
              </Main>
            </Route>
            <Route path="/ulubione">
              <Ulubione/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

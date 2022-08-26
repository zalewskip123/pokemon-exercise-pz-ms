import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar/NavBar";
import Main from "./components/layout/Main/Main";
import PokemonList from "./components/pokemon/PokemonList";
import Ulubione from "./components/layout/Ulubione/Ulubione";
import Stats from "./components/layout/Stats/Stats";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Main>
                <PokemonList />
              </Main>
            </Route>
            <Route path="/ulubione">
              <Ulubione />
            </Route>
            <Route path="/stats/:id">
              <Stats />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

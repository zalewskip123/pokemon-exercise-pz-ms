import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar/NavBar";
import Main from "./components/layout/Main/Main";
import PokemonList from "./components/pokemon/PokemonList";
import Ulubione from "./components/layout/Ulubione/Ulubione";

function App() {
  const [dataRed2, setDataRed2] = useState();

  useEffect(() => {
    console.log(dataRed2);
  }, [dataRed2])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Main>
                <PokemonList setDataRed2={setDataRed2}/>
              </Main>
            </Route>
            <Route path="/ulubione">
              <Ulubione dataFv={dataRed2}/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

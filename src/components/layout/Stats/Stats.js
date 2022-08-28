import React ,{ useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import "./Stats.css";

const Stats = ({children}) => {

  const {id} = useParams();
  const name = id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const URL2 = `https://pokeapi.co/api/v2/pokemon-species/${name}`

  useEffect(() => {
    fetch(URL)
    .then((response) => {
      if(!response.ok) {
        throw new Error(
          "Error"
        );
      }
      return response.json();
    })
    .then((dataResponse) => console.log(`This is data= ${dataResponse}`))
    .catch((err) => {
      console.log(err.mesage);
    });
}, [URL])

  return (
    <main className="Stats">
      <div className="sidebar" />
      <div className="statsdiv">{ children }
        <h1> stats = {name}</h1>
      </div>
      <div className="sidebar" />
    </main>
  );
}

export default Stats;

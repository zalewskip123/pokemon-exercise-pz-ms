import React ,{ useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import "./Stats.css";

const Stats = ({children}) => {

  const {id} = useParams();
  const name = id;

  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetch(URL)
        .then(response => {
            if(response.ok) {
                return response
            }
            throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
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

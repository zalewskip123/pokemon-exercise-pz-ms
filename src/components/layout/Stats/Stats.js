import React ,{ useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import "./Stats.css";

//className={result.types.length === 2 ? "double" : "single"

const Stats = () => {

  const {id} = useParams();
  const name = id;

  const [result, setResult] = useState(undefined);

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
          setResult(data);
          console.log(data);
          console.log(data.types)
        })
        .catch(err => {
            console.log(err);
        })
}, [URL])

  return (
    <main className="Stats">
      <div className="sidebar" />
        <div className="statsdiv">
          <div className="head">
            <h1> {name} </h1>
            {result && result.types.map(({type}, index) => (
                <h3 key={index}> {type.name} </h3>
            ))}
          </div>
        </div>
      <div className="sidebar" />
    </main>
  );
}

export default Stats;

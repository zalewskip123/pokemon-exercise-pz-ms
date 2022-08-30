import React ,{ useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import "./Stats.css";
import "./ProgressBars.css";

//className={result.types.length === 2 ? "double" : "single"}

/*<div className="container">
  <div className="filler" style={{width: `${HPStat}%`}}>
    <span className="label">{`${result && result.stats[0].base_stat}`}</span>
  </div>
</div> */

const Stats = () => {

  const {id} = useParams();
  const name = id;

  const Color = {
    bug: 'B1C041',
    dark: '875E52',
    dragon: '8371ED',
    electric: 'F9D152',
    fairy: 'E7A1E6',
    fighting: 'B35D43',
    fire: 'EA4A41',
    flying: '6C9AF0',
    ghost: '6F6EBC',
    grass: '79C65B',
    ground: 'D9BA5F',
    ice: '80DFF9',
    normal: 'B0B19E',
    poison: 'A55797',
    psychic: 'F15AA0',
    rock: 'BCB072',
    steel: 'B4B3C6',
    water: '44A1F8'
  }

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
        })
        .catch(err => {
            console.log(err);
        })
}, [URL])

const ImageURL = result && result.sprites.front_default;
const HPStat = result && result.stats[0].base_stat;
const ATStat = result && result.stats[1].base_stat;
const DEFStat = result && result.stats[2].base_stat;
const SPEStat = result && result.stats[5].base_stat;
const SATStat = result && result.stats[3].base_stat;
const SDEFStat = result && result.stats[4].base_stat;

const Bar = (Stat) => {
  return (
    <div className="container">
      <div className="filler" style={{width: `${Stat / 300 * 100}%`}}>
        <span className="label">{`${Stat}`}</span>
      </div>
    </div>
  )
}

  return (
    <main className="Stats">
      <div className="sidebar" />
        <div className="statsdiv">
          <div className="head">
            <h1> {name} {result && (result.id > 100 ? `#${result.id}` : result.id > 10 ? `#0${result.id}` : `#00${result.id}`)}</h1>
            {result && result.types.map(({type}) => (
                <h3 
                  key={type} 
                  className={result.types.length === 2 ? "double" : "single"} 
                  style={{backgroundColor: `#${Color[type.name]}`}}
                > 
                  {type.name} 
                </h3>
            ))}
            <div>
              <img src={ImageURL !== null ? ImageURL : require("../../../images/ball.png")} alt="Pokemonimage"/>
              <div className="stats">
                <h2>Stats: </h2>
                <div>
                  <p>HP:</p>
                  {Bar(HPStat)}
                </div>
                <div>
                  <p>Attack:</p>
                  {Bar(ATStat)}
                </div>
                <div>
                  <p>Defense:</p>
                  {Bar(DEFStat)}
                </div>
                <div>
                  <p>Speed:</p>
                  {Bar(SPEStat)}
                </div>
                <div>
                  <p>Special Attack:</p>
                  {Bar(SATStat)}
                </div>
                <div>
                  <p>Special Defense:</p>
                  {Bar(SDEFStat)}
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="sidebar" />
    </main>
  );
}

export default Stats;

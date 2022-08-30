import React, { useState } from "react";
import "./UlubioneList.css";

const UlubioneSumStats = (props) => {
    const [sumHP, setSumHP] = useState(0);
    const [sumDefense, setSumDefense] = useState(0);
    const [sumAttack, setSumAttack] = useState(0);
    const [sumSpeed, setSumSpeed] = useState(0);
    const [sumSpecialAttack, setSumSpecialAttack] = useState(0);
    const [sumSpecialDefense, setSumSpecialDefense] = useState(0);
    
    if (props.resultObject.result !== null && sumHP === 0) {
        let shp = 0;
        let sdf = 0;
        let sat = 0;
        let ssp = 0;
        let sspecialat = 0;
        let sspecialdf = 0;
        for (let i = 0; i < props.resultObject.result.length; i++) {
            let URL = `https://pokeapi.co/api/v2/pokemon/${props.resultObject.result[i].name}`;
            fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(data => { // eslint-disable-line
                shp += data.stats[0].base_stat;
                sat += data.stats[1].base_stat;
                sdf += data.stats[2].base_stat;
                sspecialat += data.stats[3].base_stat;
                sspecialdf += data.stats[4].base_stat;
                ssp += data.stats[5].base_stat;
                if(i === props.resultObject.result.length - 1) {
                    setSumHP(shp);
                    setSumAttack(sat);
                    setSumDefense(sdf);
                    setSumSpecialAttack(sspecialat);
                    setSumSpecialDefense(sspecialdf);
                    setSumSpeed(ssp);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    
    return (
        <div className="statsSumUDiv">
            <p className="nameStatsPU">{`Total pokemon stats of ${props.resultObject.result.length} pokemons`}</p>
            <div className="divGridSumStatsU">
                <div className="gridcollumn">
                    <p>HP: {sumHP}</p>
                    <p>Attack: {sumAttack}</p>
                    <p>Defense: {sumDefense}</p>
                </div>
                <div className="gridcollumn">
                    <p>Speed: {sumSpeed}</p>
                    <p>Special attack: {sumSpecialAttack}</p>
                    <p>Special defense: {sumSpecialDefense}</p>
                </div>
            </div>
        </div>
    )
}

export default UlubioneSumStats;

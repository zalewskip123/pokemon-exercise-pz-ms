import React, { useEffect, useState } from "react";
import "./UlubioneList.css";

const UlubioneStaticList = (props) => {
    const [stats, setStats] = useState(null);

    let content = null;

    const URL = `https://pokeapi.co/api/v2/pokemon/${props.name}`;

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
                setStats(data.stats);
            })
            .catch(err => {
                console.log(err);
            })
    }, [URL])

    if (stats !== null) {
        content = (
            <div className={`statsU`}>
                <p>HP: {stats[0].base_stat}</p>
                <p>Attack: {stats[1].base_stat}</p>
                <p>Defense: {stats[2].base_stat}</p>
                <p>Speed: {stats[5].base_stat}</p>
                <p>Special attack: {stats[3].base_stat}</p>
                <p>Special defense: {stats[4].base_stat}</p>
            </div>
        )    
    }
    
    return (
        <div className="statsUDiv">
            {content}
        </div>
    )
}

export default UlubioneStaticList;

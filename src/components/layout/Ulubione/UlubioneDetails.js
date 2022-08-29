import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./UlubioneList.css";

const UlubioneDetails = (props) => {
    const {name, id} = props;

    const [ImageURL, setImageURL] = useState(null)

    if (id !== 899 && id !== 900) {
        fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
            .then(response => {
                if(response.ok) {
                    setImageURL(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
                }
            })
        .catch({})
    }

    return (
        <>
            <div className="UlubioneDetails">
                <Link to={`/stats/${name}`}>
                    <img src={ImageURL !== null ? ImageURL : require("../../../images/ball.png")} alt="Pokemonimage"/>
                    <p>{name}</p>
                </Link>
            </div>
            <div className={`statsU`}>
                <p>HP:</p>
                <p>Attack:</p>
                <p>Defense:</p>
                <p>Speed:</p>
                <p>Special attack:</p>
                <p>Special defense:</p>
            </div>
        </>
    )
}

export default UlubioneDetails;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Pokemon.css";

const PokemonDetails = (props) => {
    const {name, id} = props;

    const [ImageURL, setImageURL] = useState(null)

    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        .then(response => {
            if(response.ok) {
                setImageURL(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
            }
        })
        .catch({})

    return (
        <div className="PokemonDetails">
            <Link to={`/stats/${name}`}>
                <img src={ImageURL !== null ? ImageURL : require("../../images/ball.png")} alt="Pokemonimage"/>
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default PokemonDetails;
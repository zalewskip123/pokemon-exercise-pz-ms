import React from "react";
import { Link } from "react-router-dom";

import "./Pokemon.css";

const PokemonDetails = (props) => {
    const {name, id} = props;

    const ImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="PokemonDetails">
            <Link to={`/stats/${id}`}>
                <img src={ImageURL} alt="Pokemonimage"/>
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default PokemonDetails;
import React from "react";
import "./Pokemon.css";

const PokemonDetails = (props) => {
    const {name, id} = props;

    const ImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="PokemonDetails">
            <img src={ImageURL} alt="Pokemonimage"/>
            <p>{name}</p>
        </div>
    )
}

export default PokemonDetails;
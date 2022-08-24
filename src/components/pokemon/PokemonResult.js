import React, { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";
import Ulubione from "../layout/Ulubione/Ulubione";
import "./Pokemon.css";

const Result = (props) => {
    const {result, next, prev, err} = props;
    const [idFP, setIdFP] = useState([]);
    
    let content = null;

    const FavouritePoke = (id) => {
        if (!idFP.includes(id)) setIdFP(currentArray => [...currentArray, id]);
        else setIdFP(idFP.slice(idFP.indexOf(id), 1));
    }

    if (!err && result != null) {
        content = (
            <div className="pokemonsGrid">
                {result.map(({name, url}, index) => (
                    <div className="pokemonsGridItem" key={index}>
                        <div className="headerGridItem">
                            <p>{index + 1}</p>
                            <div className="imagesPokemon">
                                <img className="image1" src={require("../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className="image2" onClick={() => {FavouritePoke(index + 1)}} src={require("../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <PokemonDetails name={name} id={index + 1}/>
                    </div>
                ))}
            </div>
        )
    }
    
    return (
        <div className="result">
            {err ? `Nie mamy w bazie pokemonów!` : content}
        </div>
    )
}

export default Result;
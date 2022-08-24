import React from "react";
import PokemonDetails from "./PokemonDetails";
import "./Pokemon.css";

const Result = (props) => {
    const {result, next, prev, err} = props;
    
    let content = null;

    if (!err && result != null) {
        let id = 0;
        content = (
            <div className="pokemonsGrid">
                {result.map(({name, url}) => (
                    <div className="pokemonsGridItem" key={id++}>
                        <div className="headerGridItem">
                            <p>{id + 1}</p>
                            <div className="imagesPokemon">
                                <img className="image1" src={require("../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className="image2" src={require("../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <PokemonDetails name={name} id={id + 1}/>
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
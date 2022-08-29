import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import "./Pokemon.css";

const Result = (props) => {
    if (JSON.parse(localStorage.getItem("idFP")) === null) localStorage.setItem("idFP",JSON.stringify([]));
    if (JSON.parse(localStorage.getItem("pokename")) === null) localStorage.setItem("pokename",JSON.stringify([]));

    const {result, err} = props;
    const [idFPw, setIdFP] = useState(JSON.parse(localStorage.getItem("idFP")));
    const [namePokemon, setNamePokemon] = useState(JSON.parse(localStorage.getItem("pokename")));
    
    let content = null;

    const FavouritePoke = (id, name) => {
        if (!idFPw.includes(id) && idFPw.length !== 6) setIdFP(currentArray => [...currentArray, id]);
        else setIdFP(currentArray => currentArray.filter(currentElement => currentElement !== id));
        if (!namePokemon.includes(name) && idFPw.length !== 6) setNamePokemon(currentArray => [...currentArray, name]);
        else setNamePokemon(currentArray => currentArray.filter(currentElement => currentElement !== name));
    }

    if (!err && result != null) {
        content = (
            <div className="pokemonsGrid">
                {result.map(({name}, index) => (
                    <div className="pokemonsGridItem" key={index + (props.number * 20)}>
                        <div className="headerGridItem">
                            <p>{index + 1 + (props.number * 20)}</p>
                            <div className="imagesPokemon">
                                <img className="image1" src={require("../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className={!idFPw.includes(index + 1 + ((props.number) * 20)) ? `image2 ${"imageId"+(index + 1)}` : `image2 ${"imageId"+(index + 1)} active`} onClick={() => {FavouritePoke(index + 1 + ((props.number) * 20), name)}} src={require("../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <PokemonDetails name={name} id={index + 1 + (props.number * 20)}/>
                    </div>
                ))}
            </div>
        )
    }

    const setItemToLocalStorage = () => {
        if (idFPw.length !== 0) localStorage.setItem("idFP",JSON.stringify(idFPw));
        else localStorage.setItem("idFP",JSON.stringify([]))
        if (namePokemon.length !== 0) localStorage.setItem("pokename",JSON.stringify(namePokemon));
        else localStorage.setItem("pokename",JSON.stringify([]))
    }
    
    return (
        <div className="result">
            {setItemToLocalStorage()}
            {err ? `Nie mamy w bazie pokemonów!` : content}
        </div>
    )
}

export default Result;
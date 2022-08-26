import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import "./Pokemon.css";
import "./Button.css";

const Result = (props) => {
    if (JSON.parse(localStorage.getItem("idFP")) === null) localStorage.setItem("idFP",JSON.stringify([]));
    if (JSON.parse(localStorage.getItem("pokename")) === null) localStorage.setItem("pokename",JSON.stringify([]));

    const {result, err} = props;
    const [idFP, setIdFP] = useState(JSON.parse(localStorage.getItem("idFP")));
    const [namePokemon, setNamePokemon] = useState(JSON.parse(localStorage.getItem("pokename")));
    const [number, setNumber] = useState(0);
    
    let content = null;

    const nextButton = () => {
        if(number < 44) {
            setNumber(number + 1);
        }
    };

    const prevButton = () => {
        if(number > 0){
            setNumber(number - 1);
        }
        else{
            setNumber(number);
        }
    };

    const FavouritePoke = (id, name) => {
        if (!idFP.includes(id)) setIdFP(currentArray => [...currentArray, id]);
        else setIdFP(currentArray => currentArray.filter(currentElement => currentElement !== id));
        if (!namePokemon.includes(name)) setNamePokemon(currentArray => [...currentArray, name]);
        else setNamePokemon(currentArray => currentArray.filter(currentElement => currentElement !== name));
    }

    if (!err && result != null) {
        const resultPart = result.slice(number * 20, (number + 1) * 20);
        content = (
            <div className="pokemonsGrid">
                {resultPart.map(({name}, index) => (
                    <div className="pokemonsGridItem" key={index + (number * 20)}>
                        <div className="headerGridItem">
                            <p>{index + 1 + (number * 20)}</p>
                            <div className="imagesPokemon">
                                <img className="image1" src={require("../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className={!idFP.includes(index + 1 + ((number) * 20)) ? `image2 ${"imageId"+(index + 1)}` : `image2 ${"imageId"+(index + 1)} active`} onClick={() => {FavouritePoke(index + 1 + ((number) * 20), name)}} src={require("../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <PokemonDetails name={name} id={index + 1 + (number * 20)}/>
                    </div>
                ))}
                <div>
                    <button className="button prev" onClick={prevButton}>
                        <p className="buttonText">Prev</p>
                    </button>
                </div>
                <div>
                    <button className="button next" onClick={nextButton}>
                        <p className="buttonText">Next</p>
                    </button>
                </div>
            </div>
        )
    }

    const setItemToLocalStorage = () => {
        if (idFP.length !== 0) localStorage.setItem("idFP",JSON.stringify(idFP));
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
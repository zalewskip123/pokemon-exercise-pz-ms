import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import "./Pokemon.css";
import "./Button.css";

const Result = (props) => {
    const {result, err} = props;
    const [idFP, setIdFP] = useState([]);
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
            setIdFP(number);
        }
    };

    const FavouritePoke = (id) => {
        if (!idFP.includes(id)) setIdFP(currentArray => [...currentArray, id]);
        else setIdFP(currentArray => currentArray.filter(currentElement => currentElement !== id));
        props.setDataRed(idFP);
        var element = document.querySelectorAll(".imageId"+(id));
        for (let i=0; i < element.length; i++) {
            if (!idFP.includes(id)) element[i].classList.add("active");
            else element[i].classList.remove("active");
        }
    }

    if (!err && result != null) {
        const resultPart = result.slice(number * 20, (number + 1) * 20);
        content = (
            <div className="pokemonsGrid">
                {resultPart.map(({name, url}, index) => (
                    <div className="pokemonsGridItem" key={index + (number * 20)}>
                        <div className="headerGridItem">
                            <p>{index + 1 + (number * 20)}</p>
                            <div className="imagesPokemon">
                                <img className="image1" src={require("../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className={`image2 ${"imageId"+(index + 1)}`} onClick={() => {FavouritePoke(index + 1)}} src={require("../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <PokemonDetails name={name} id={index + 1 + (number * 20)}/>
                    </div>
                ))}
                <div>
                    <button className="button" onClick={prevButton}>
                        <p className="buttonText">Prev</p>
                    </button>
                </div>
                <div>
                    <button className="button" onClick={nextButton}>
                        <p className="buttonText">Next</p>
                    </button>
                </div>
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
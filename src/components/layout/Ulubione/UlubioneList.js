import React, { useEffect, useState } from "react";
import UlubioneDetails from "./UlubioneDetails";
import "./UlubioneList.css";

const PokemonList = (props) => {
    const [resultU, setResultU] = useState(props.objU);
    const [idFPr, setIdFPr] = useState(props.arrID);
    const [namePokemon, setNamePokemon] = useState(props.arrName);   

    let content = null;

    const FavouritePokeDel = (id, name) => {
        setIdFPr(currentArray => currentArray.filter(currentElement => currentElement !== Number(id)));
        setNamePokemon(currentArray => currentArray.filter(currentElement => currentElement !== name));
        window.location.reload();
    }

    if (resultU !== null) {
        content = (
            <div className="pokemonsGridU">
                {resultU.result.map(({id, name}) => (
                    <div className="pokemonsGridItemU" key={id}>
                        <div className="headerGridItemU">
                            <p>{id}</p>
                            <div className="imagesPokemonU">
                                <img className="imageU1" src={require("../../../images/favourite/115793_star_icon.png")} alt="Favouriteimage"/>
                                <img className={`imageU2 ${"imageId"+(id)} active`} onClick={() => {FavouritePokeDel(id, name)}} src={require("../../../images/favourite/285661_star_icon.png")} alt="Favouriteimage"/>
                            </div>
                        </div>
                        <UlubioneDetails name={name} id={id}/>
                    </div>
                ))}
            </div>
        )
    }


    const setItemToLocalStorage = () => {
        if (idFPr.length !== 0) localStorage.setItem("idFP",JSON.stringify(idFPr));
        else localStorage.setItem("idFP",JSON.stringify([]))
        if (namePokemon.length !== 0) localStorage.setItem("pokename",JSON.stringify(namePokemon));
        else localStorage.setItem("pokename",JSON.stringify([]))
    }
    
    return (
        <div className="result">
            {setItemToLocalStorage()}
            {content}
        </div>
    )
}

export default PokemonList;

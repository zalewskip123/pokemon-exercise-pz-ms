import React, { useEffect, useState } from "react";
//import Result from "./PokemonResult";
//import Button from "../button/Button";

const PokemonList = () => {
    const [result, setResult] = useState(undefined);
    const [err, setErr] = useState(false);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/`;
        fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [next, prev])

    return <p>test</p>
}

export default PokemonList;

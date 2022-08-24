import React, { useEffect, useState } from "react";
import Result from "./PokemonResult";

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
                setResult(data.results);
                setNext(data.next);
                setPrev(data.prev);
                setErr(false);
            })
            .catch(err => {
                console.log(err);
                setErr(true);
            })
    }, [])

    return(
        <>
            <Result result={result} next={next} prev={prev} error={err}/>
        </>
    )
}

export default PokemonList;

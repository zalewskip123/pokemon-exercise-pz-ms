import React, { useEffect, useState } from "react";
import Result from "./PokemonResult";

const PokemonList = (props) => {
    const [result, setResult] = useState(undefined);
    const [err, setErr] = useState(false);

    const [dataRed, setDataRed] = useState();

    const ReadDataToApp = (dataRed) => {
        props.setDataRed2(dataRed);
    }

    useEffect(() => {
        ReadDataToApp(dataRed)
    })

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/?limit=898`;
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
                setErr(false);
            })
            .catch(err => {
                console.log(err);
                setErr(true);
            })
    }, [])

    return(
        <>
            <Result result={result} error={err} setDataRed={setDataRed}/>
        </>
    )
}

export default PokemonList;

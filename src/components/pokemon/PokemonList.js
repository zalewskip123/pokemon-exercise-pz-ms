import React, { useEffect, useState } from "react";
import Result from "./PokemonResult";
import "./Button.css";

const PokemonList = () => {
    const [result, setResult] = useState(undefined);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [err, setErr] = useState(false);
    const [URL, setURL] = useState(`https://pokeapi.co/api/v2/pokemon`);
    const [number, setNumber] = useState(0);

    const nextButton = () => {
        setTimeout(() => {
            if(number !== 44) {
                if (number !== 43) setURL(next);
                else setURL("https://pokeapi.co/api/v2/pokemon/?offset=880&limit=18");
                setNumber(number + 1);
            }
        }, 1000);
    };

    const prevButton = () => {
        setTimeout(() => {
            if(prev !== null) {
                if (number !== 44) setURL(prev);
                else setURL("https://pokeapi.co/api/v2/pokemon/?offset=860&limit=20");
                setNumber(number - 1);
            }
        }, 1000);
    };

    useEffect(() => {
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
                setPrev(data.previous);
                setErr(false);
            })
            .catch(err => {
                console.log(err);
                setErr(true);
            })
    }, [URL])

    let content = (
        <>
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
        </>
    )

    return(
        <>
            {content}
            <Result result={result} error={err} number={number}/>
        </>
    )
}

export default PokemonList;

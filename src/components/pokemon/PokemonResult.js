import React from "react";

const Result = (props) => {
    const {result, next, prev, err} = props.pokemons;
    
    let content = null;

    if (!err && next) {
        content = (
            <div>
                {console.log(result, prev)}
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
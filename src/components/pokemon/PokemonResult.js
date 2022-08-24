import React from "react";
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
                            <p>{id}</p>
                        </div>
                        <p>{name}</p>
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
import React from "react";

const Result = (props) => {
    const {result, next, prev, err} = props;
    
    let content = null;

    if (!err && result != null) {
        let i = 0;
        content = (
            result.map(({name, url}) => (
                <div key={i++}>
                    <p key={i++}>{name}</p>
                    <p key={i++}>{url}</p>
                </div>
            ))
        )
    }
    
    return (
        <div className="result">
            {err ? `Nie mamy w bazie pokemonów!` : content}
        </div>
    )
}

export default Result;
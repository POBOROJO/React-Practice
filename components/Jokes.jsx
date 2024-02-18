import React from "react";

export default function Jokes(props){
    return(
        <>
            <h2>{props.Setup}</h2>
            <p>{props.Punchline}</p>
            <hr />
        </>
    )
}
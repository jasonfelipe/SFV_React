import React from "react";
import "./Jumbotron.css";

export const Jumbotron = props => {
    return (
        <div className='jumbotron'>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}
import React from "react";
export const DropdownItem = props => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}
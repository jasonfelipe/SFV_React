import React from "react";
export const DropdownItem = props => {
    return (
        <button onClick={props.getData}>{props.name}</button>
    )
}
import React from "react";

export const DropdownMenu = props => {
    return (
        <div className="menu">
            <button onClick={props.showDropdown} className="btn btn-secondary">
                {props.name}
            </button>


        {
            props.show ? 
        (
            <div>
                    {props.children}
                </div>
                )
                : (null)}
            </div>
        )
}
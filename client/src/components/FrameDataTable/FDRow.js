import React from "react";

export const FDRow = (props) => {

    let blockColor;
    let hitColor;
    
    if (props.onBlock <=-1){
        blockColor = "negative"
    }
    if (props.onBlock <= -3 ){
        blockColor = "unsafe"
    } 

    if (props.onHit <=-1){
        hitColor = "negative"
    }

    return (
        <tr>
            <td>{props.move}</td>
            <td>{props.startup ? props.startup : "Null"}</td>
            <td>{props.active ? props.active : "Null"}</td>
            <td>{props.recovery ? props.recovery : "Null"}</td>
            <td id={hitColor}>{props.onHit ? props.onHit : "Null"}</td>
            <td id={blockColor}>{props.onBlock ? props.onBlock : "Null"}</td>
            <td>{props.damage ? props.damage : "Null"}</td>
            <td>{props.stun ? props.stun : "Null"}</td>
            <td>{props.moveType ? props.moveType : "Null"}</td>
            <td>{props.attackType ? props.attackType : "Null"}</td>
            <td>{props.cancels ? props.cancels : "Null"}</td>
        </tr>
    )
}
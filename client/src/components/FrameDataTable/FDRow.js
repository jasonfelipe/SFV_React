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
        <tr onClick={props.getMoveInfo} className='move' id={props.move}>
            <td class={props.move}>{props.move}</td>
            <td class={props.move}>{props.startup ? props.startup : "Null"}</td>
            <td class={props.move}>{props.active ? props.active : "Null"}</td>
            <td class={props.move}>{props.recovery ? props.recovery : "Null"}</td>
            <td id={hitColor} class={props.move}>{props.onHit ? props.onHit : "Null"}</td>
            <td id={blockColor} class={props.move}>{props.onBlock ? props.onBlock : "Null"}</td>
            <td class={props.move}>{props.damage ? props.damage : "Null"}</td>
            <td class={props.move}>{props.stun ? props.stun : "Null"}</td>
            <td class={props.move}>{props.moveType ? props.moveType : "Null"}</td>
            <td class={props.move}>{props.attackType ? props.attackType : "Null"}</td>
            <td class={props.move}>{props.cancels ? props.cancels : "Null"}</td>
        </tr>
    )
}
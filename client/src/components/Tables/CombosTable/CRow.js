import React from "react";

export const CRow = (props) => {


    return (
        <tr onClick={props.getComboInfo} className='combo' id={props.comboID}>
            <td className={props.comboID}>{props.combo}</td>
            <td className={props.comboID}>{props.dmg}</td>
            <td className={props.comboID}>{props.hits}</td>
        </tr>
    )
}
import React from "react";

export const CTable = (props) => {

    return (
        <table>
            <tbody>
                <tr id='topRow'>
                    <td>Combo</td>
                    <td>Damage</td>
                    <td>Hits</td>        
                </tr>
                {props.children}
            </tbody>
        </table>
    )
}
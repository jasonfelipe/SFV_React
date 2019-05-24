import React from "react";

export const FDTable = (props) => {

    return (
        <table>
            <tbody>
                <tr id='topRow'>
                    <td>Move Name</td>
                    <td>Start Up</td>
                    <td>Active</td>
                    <td>Recovery</td>
                    <td>On Hit</td>
                    <td>On Block</td>
                    <td>Damage</td>
                    <td>Stun</td>
                    <td>Move Type</td>
                    <td>Attack Type</td>   
                    <td>Cancels</td>         
                </tr>
                {props.children}
            </tbody>
        </table>
    )
}
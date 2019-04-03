import React from "react";
import "./Modal.css";



//Container Component should have these props:
// this.state.show and their appropriate functions.

// this.state.close function to close the modal.

//props.combo is the total combo,
//props.availableMoves is the moves that are good to combo.
//props.image is each move's image.
export const ComboModal = props => {
    return (
        <div className='modal-wrapper'
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-content">

                <div className='modal-header'>
                    <h4 className='modal-title center'>
                        COMBO CREATOR
                    </h4>
                </div>

                <div className='modal-body'>
                    <div className="row">
                        <div>
                            YOUR COMBO
                    <h5>{props.combo}</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={props.availableMoves ? 'col-sm-6 col-border' : "col-sm-12"}>
                            <h3 className='center'>Available Moves</h3>
                            <ul>
                                {props.availableMoves.map((element, index) =>
                                    <li key={index}>
                                        {element}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className='col-sm-6'>
                            <h3 className='center'>Move Images</h3>
                            <img className='centered' alt={props.move} src={props.src} />
                        </div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}
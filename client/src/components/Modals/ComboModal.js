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
                    {props.combo.length > 0 ? 
                    <div className="row">
                        <div className='col-sm-6'>
                            <h3 className='center'>
                                YOUR COMBO
                            </h3>

                            <ul className='centered'>    
                                {props.combo.map((moves, index) =>
                                    <li key={moves.move + index}>
                                        {moves.move}
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className='col-sm-6'>
                                <div className='row'>
                                
                                    <h4 className='center'>
                                        Combo Data
                                    </h4>
                                </div>

                                <div className='row'>
                                    <h5>
                                        Damage: {props.dmg}
                                    </h5>
                                </div>

                                <div className='row'>
                                    <h5>
                                        Number of Hits: {props.hits}
                                    </h5>
                                </div>     
                            </div>
                        </div>
                        : 
                    <div className='row'> 
                        <h3 className='center'>No Data Selected</h3>
                    </div>
                }
                    <div className='row'>
                        <div className={props.availableMoves ? 'col-sm-6 col-border' : "col-sm-12"}>
                        {props.availableMoves.length > 0 ? 
                            <div>
                            <h3 className='center'>Available Moves</h3> 
                            <ul>
                                
                                    {props.availableMoves.map((element, index) =>
                                        <li key={index}>
                                            <button onClick={props.moveSelector}>{element.move}</button>
                                        </li>
                                    )}
                                
                            </ul>
                            </div> :

                                <h3 className='center'>No Moves Available</h3>
                        }    
                            
                                
                        </div>
                        <div className='col-sm-6'>
                            <h3 className='center'>Move Images</h3>
                            <img className='centered img-fluid' alt={props.move} src={props.src} />
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
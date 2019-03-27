import React from "react";
import "./Modal.css";


export const Modal = props => {
    return (
        <div className='modal-wrapper'
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-content">
                <div className='modal-header'>
                    <h5 className='modal-title'>
                        {props.move}
                    </h5>
                    <div className='modal-body'>
                            <div className="row">
                                <img alt={props.move} src={props.src}/>
                            </div>
                        <div className='row'>
                            <div className='col-6-sm'>
                                {props.info}
                            </div>

                            <div className='col-6-sm'>
                                {props.notes}
                            </div>
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
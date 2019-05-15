import React from "react";
import "./Modal.css";



//Container Component should have these props:
// this.state.show and their appropriate functions.
// this.state.body (in this case we made it have different props for this)
// this.state.close function to close the modal.


export const FrameDataModal = props => {
    return (
        <div className='modal-wrapper'
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-content">

                <div className='modal-header'>
                    <h3 className='modal-title center'>
                        {props.title}
                    </h3>
                </div>

                <div className='modal-body'>
                    <div className="row">
                        <img className='centered img-fluid' alt={props.move} src={props.src} />
                    </div>
                    <div className='row'>
                        <div className={props.notes ? 'col-sm-6 col-border' : "col-sm-12"}>
                            <h5 className='center'>Information</h5>
                            <ul>
                                {props.info.map((element, index) =>
                                    <li key={index}>
                                        {element}
                                    </li>
                                )}
                            </ul>
                        </div>
                        {props.notes === null ?
                            <div></div> :
                            <div className='col-sm-6'>
                                <h5 className='center'>Other Notes</h5>
                                {props.notes}

                            </div>
                        }
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className="btn btn-danger" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}
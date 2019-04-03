import React, { Component } from "react";
import API from '../utils/API';
import { FDRow, FDTable } from "../components/FrameDataTable";
import { Modal } from "../components/Modal";
import './css/style.css'

class Main extends Component {
    constructor(props, context) {
        super(props, context)
        this.getCharacterData = this.getCharacterData.bind(this);
        this.getMoveInfo = this.getMoveInfo.bind(this);
        this.state = {
            jumbotronTitle: "",
            data: [],
            modal: false,
            modalInfo:{}
        };

    };



    getCharacterData = event => {
        event.preventDefault();
        API.getFrameData(event.target.innerHTML).then(res => {
            this.setState({
                data: res.data
            });
        });
    };

    showModalHandler = () => {
        this.setState({
            modal: true
        });
    };

    closeModalHandler = () => {
        this.setState({
            modal: false
        })
    }

    getMoveInfo = event =>{
        event.preventDefault();
        let clicked = event.target.className;
        console.log(clicked);
        this.state.data.forEach(element => {
            if(clicked === element.move){
                console.log(element)    
                this.setState({
                    modalInfo: element
                });
                
            }
        });
        
        this.showModalHandler();
    }

    render() {
        return (
            <div>
                {this.state.modal ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <div className='jumbotron'>
                    <h1>Main Menu</h1>
                    <h2 className='center'>Character Select</h2>
                    <button id='ryu' onClick={this.getCharacterData} className='btn btn-primary'>Ryu</button>
                </div>

                {this.state.data.length > 0 ?
                    <div className='container'>
                        <FDTable>
                            {this.state.data.map(data =>
                                <FDRow
                                    getMoveInfo={this.getMoveInfo}
                                    key={data.move}
                                    move={data.move}
                                    startup={data.startup}
                                    active={data.active}
                                    recovery={data.recovery}
                                    onHit={data.onHit}
                                    onBlock={data.onBlock}
                                    damage={data.damage}
                                    stun={data.stun}
                                    moveType={data.moveType}
                                    attackType={data.attackType}
                                    cancels={data.cancels}
                                />
                            )}
                        </FDTable>
                    </div>
                    :
                    <h1>
                        Choose your character
                    </h1>
                }


                    <Modal
                        className='modal'
                        show={this.state.modal}
                        close={this.closeModalHandler}
                        title={this.state.modalInfo.move || "Checking"}
                        move={this.state.modalInfo.move || "Move Name"}
                        info={["Startup: " + this.state.modalInfo.startup, "Active: " + this.state.modalInfo.active, 
                            "Recovery: " + this.state.modalInfo.recovery, "Damage: " + this.state.modalInfo.damage,
                            "Stun: " + this.state.modalInfo.stun, "Frames on hit: " + this.state.modalInfo.onHit, 
                            "Frames on Block: " + this.state.modalInfo.onBlock, "Move Type: " + this.state.modalInfo.moveType, 
                            "Attack Type: " + this.state.modalInfo.attackType, 
                            ]}
                        notes={this.state.modalInfo.notes ? this.state.modalInfo.notes.split('.') : null}                        
                        src={this.state.modalInfo.gif || null}
    
                    />                
                    
            </div>
        );
    };
};

export default Main;






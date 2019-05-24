import React, { Component } from "react";
import API from '../utils/API';
import { FDRow, FDTable } from "../components/Tables/FrameDataTable";
import { FrameDataModal } from "../components/Modals";

import { Jumbotron } from "../components/Jumbotron"
import './css/style.css'

class Main extends Component {
    constructor(props, context) {
        super(props, context)
        this.getCharacterData = this.getCharacterData.bind(this);
        this.getMoveInfo = this.getMoveInfo.bind(this);
        this.state = {
            jumbotronTitle: "",
            data: [],
            frameDataModal: false,
            frameDataInfo: {}
        };
    };


    getCharacterData = event => {
        event.preventDefault();
        let character = event.target.innerHTML
        API.getFrameData(character).then(res => {
            this.setState({
                data: res.data,
                jumbotronTitle: character
            });
        });
    };

    showFrameDataModal = () => {

        this.setState({
            frameDataModal: true,
        });
    };

    closeFrameDataModal = () => {
        this.setState({
            frameDataModal: false,
        })
    }


    getMoveInfo = event => {
        event.preventDefault();
        let clicked = event.target.className;
        this.state.data.forEach(element => {
            if (clicked === element.move) {
                this.setState({
                    frameDataInfo: element
                });
            }
        });
        this.showFrameDataModal();
    }

    goToCombos = () => {
        window.location = '/combo'
    }


    render() {
        return (
            <div className='wrapper'>
                {this.state.frameDataModal ? <div onClick={this.closeFrameDataModal} className="back-drop"></div> : null}
                <Jumbotron

                    title={this.state.jumbotronTitle ? this.state.jumbotronTitle + " Frame Data" : "Character Select"}>

                    <button id='ryu' onClick={this.getCharacterData} className='btn btn-primary'>Ryu</button>
                </Jumbotron>
                    <button onClick={this.goToCombos}>Create a combo</button>

                {this.state.data.length > 0 ?
                    <div className='container'>
                        <FDTable>
                            {this.state.data.map(data =>
                                <FDRow
                                    getMoveInfo={this.getMoveInfo}
                                    key={data.move}
                                    move={data.move}
                                    startup={data.startup}
                                    active={data.active === null ? "~" : data.active}
                                    recovery={data.recovery === null ? "~" : data.recovery}
                                    onHit={data.onHit === null ? "~" : data.onHit}
                                    onBlock={data.onBlock === null ? "~" : data.onBlock}
                                    damage={data.damage === null ? "~" : data.damage}
                                    stun={data.stun === null ? "~" : data.stun}
                                    moveType={data.moveType === null ? "~" : data.moveType}
                                    attackType={data.attackType === null ? "~" : data.attackType}
                                    cancels={data.cancels === null ? "~" : data.cancels}
                                />
                            )}
                        </FDTable>
                    </div>
                    :
                    <h1>
                        Choose your character
                    </h1>
                }


                <FrameDataModal
                    className='modal'
                    show={this.state.frameDataModal}
                    close={this.closeFrameDataModal}
                    title={this.state.frameDataInfo.move || "Checking"}
                    move={this.state.frameDataInfo.move || "Move Name"}
                    info={["Startup: " + this.state.frameDataInfo.startup, "Active: " + this.state.frameDataInfo.active,
                    "Recovery: " + this.state.frameDataInfo.recovery, "Damage: " + this.state.frameDataInfo.damage,
                    "Stun: " + this.state.frameDataInfo.stun, "Frames on hit: " + this.state.frameDataInfo.onHit,
                    "Frames on Block: " + this.state.frameDataInfo.onBlock, "Move Type: " + this.state.frameDataInfo.moveType,
                    "Attack Type: " + this.state.frameDataInfo.attackType,
                    ]}
                    notes={this.state.frameDataInfo.notes ? this.state.frameDataInfo.notes.split('.') : null}
                    src={this.state.frameDataInfo.gif || null}

                />



            </div>
        );
    };
};

export default Main;






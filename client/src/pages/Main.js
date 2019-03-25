import React, { Component } from "react";
import API from '../utils/API';
import { FDRow, FDTable } from "../components/FrameDataTable";
import './css/style.css'

class Main extends Component {
    constructor(props, context) {
        super(props, context)
        this.getCharacterData = this.getCharacterData.bind(this);
        this.state = {
            jumbotronTitle: "",
            data: [],
            modal: false,
        }

    }


    getCharacterData = event => {
        event.preventDefault();
        API.getFrameData(event.target.innerHTML).then(res => {
            this.setState({
                data: res.data
            });
        });
    }

    showInfoModal = () =>{
        this.setState({
            modal: true
        })
    }


    render() {


        return (
            <div>
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


            </div>




        )
    }
}

export default Main;


import React, { Component } from "react";
import { ComboModal } from "../components/Modals";
import { Jumbotron } from "../components/Jumbotron";
import './css/style.css';
import API from '../utils/API';

class Ryu extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            jumbotronTitle: "",
            data: [],
            comboModal: false,
        };
    };

    showComboModal = () => {
        this.setState({
            comboModal: true
        })
    }

    closeComboModal = () => {
        this.setState({
            comboModal: false
        })
    }

    createCombo = () => {
        this.showComboModal();
    }


    render(){
        return (
        <div className='wrapper'>
                {this.state.comboModal ? <div onClick={this.closeComboModal} className="back-drop"></div> : null}            
            <Jumbotron
                title={this.state.jumbotronTitle ? this.state.jumbotronTitle + " Frame Data" : "Character Select"}
            >
                <button id='ryu' onClick={this.getCharacterData} className='btn btn-primary'>Ryu</button>
            </Jumbotron>

            <button onClick={this.showComboModal} className='btn btn-primary'>Make a Combo</button>
            
            <ComboModal
                    className='modal'
                    show={this.state.comboModal}
                    close={this.closeComboModal}
                    availableMoves={["LOL"]}
                />
        </div>
        )
    }
}

export default Ryu;
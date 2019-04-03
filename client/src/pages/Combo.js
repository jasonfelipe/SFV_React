import React, { Component } from "react";
import { ComboModal } from "../components/Modals"
import './css/style.css'

class Ryu extends Component {
    constructor(props, context) {
        super(props, context)
        this.getCharacterData = this.getCharacterData.bind(this);
        this.getMoveInfo = this.getMoveInfo.bind(this);
        this.state = {
            jumbotronTitle: "",
            data: [],
            comboModal: false,
            frameDataInfo: {}
        };
    };



    createCombo = () => {
        this.showComboModal();
    }


    render(){
        return <div>
            <h1>
                This is for COMBOS LOL
            </h1>
            
            

            <ComboModal
                    className='modal'
                    show={this.state.comboModal}
                    close={this.closeComboModal}
                    availableMoves={["LOL"]}
                />
        </div>
    }
}

export default Ryu;
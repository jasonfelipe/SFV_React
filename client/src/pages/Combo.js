import React, { Component } from "react";
import { ComboModal } from "../components/Modals";
import { Jumbotron } from "../components/Jumbotron";
import { DropdownMenu, DropdownItem } from "../components/DropdownMenu";
import API from '../utils/API';
import './css/style.css';

class Ryu extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            jumbotronTitle: "",
            frameData: [],
            comboData: [],
            comboModal: false,
            showMenu: false,
            dropdownName: "Characters"
        };
        this.showDropdown =this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);

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
    
    showDropdown = event => {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeDropdown);
          });
    }
    
    closeDropdown = () => {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeDropdown);
        });
    }

    createCombo = () => {
        this.showComboModal();
    }

    getCharacterData = event => {
        event.preventDefault();
        let character = event.target.innerHTML
        API.getFrameData(character).then(res => {
            this.setState({
                frameData: res.data,
                jumbotronTitle: character,
                dropdownName: character
            });
        });
    };


    

    render(){
        return (
        <div className='wrapper'>
                {this.state.comboModal ? <div onClick={this.closeComboModal} className="back-drop"></div> : null}            
            <Jumbotron
                title={this.state.jumbotronTitle ? this.state.jumbotronTitle + " Frame Data" : "Character Select"}
            >



            <DropdownMenu 
                name={this.state.dropdownName}
                show={this.state.showMenu}
                showDropdown={this.showDropdown}
            >
                <DropdownItem 
                    name='Ryu'
                    onClick={this.getCharacterData}
                />
            </DropdownMenu>
            
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
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
            modalData: [],
            selectedData: "",
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

    resetData = () => {
        this.setState({
            frameData: [],
            comboData: [],
            modalData: [],
            selectedData: "",
        });
    }

    getCharacterData = event => {
        this.resetData();
        event.preventDefault();
        console.log("TEST")
        let character = event.target.innerHTML
        API.getFrameData(character).then(res => {
            let comboStarters = [];
            res.data.forEach(move => {
                if (move.onHit >= 3){
                    comboStarters.push(move);
                    }
                });

            console.log("Your Data:", res.data)


            this.setState({
                frameData: res.data,
                jumbotronTitle: character,
                dropdownName: character,
                modalData: comboStarters,
                comboModal: true
            });

            // console.log(this.state.modalData);

        });
    };

    moveSelector = event => {
        event.preventDefault();
        let selected = event.target.innerHTML;
        let comboArray = this.state.comboData;
        let moveButtons = []
        this.state.frameData.forEach(moves => {
            if (moves.move === selected){

                comboArray.push(moves);


                this.setState({
                    selectedData: moves,
                    comboData:comboArray
                });
             return selected = moves
            }

            let splitting = moves.startup.split('');

            console.log("Let me loop:", splitting);


            if (parseInt(selected.onHit) >= parseInt(moves.startup) && moves.moveType !== 'throw' &&
            moves.moveType !== 'aerial' && moves.moveType !== 'unique') {
                console.log(selected.onHit);
                

                moveButtons.push(moves)
                this.setState({
                    modalData: moveButtons
                });

            }else {
                this.setState({
                    modalData: []
                })
            }
            
        });
        


    }
    

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
                    getData={this.getCharacterData}
                />
            </DropdownMenu>
            
            </Jumbotron>

            <button onClick={this.showComboModal} className='btn btn-primary'>Make a Combo</button>
            
            <ComboModal
                    className='modal'
                    show={this.state.comboModal}
                    close={this.closeComboModal}
                    availableMoves={this.state.modalData}
                    moveSelector={this.moveSelector}
                    move={this.state.selectedData.move}
                    src={this.state.selectedData.gif}
                    combo={this.state.comboData}
            />
        </div>
        )
    }
}

export default Ryu;
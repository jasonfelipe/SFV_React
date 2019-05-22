import React, { Component } from "react";
import { ComboModal } from "../components/Modals";
import { Jumbotron } from "../components/Jumbotron";
import { DropdownMenu, DropdownItem } from "../components/DropdownMenu";
import API from '../utils/API';
import './css/style.css';
import images from '../utils/images.json';

class Ryu extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            jumbotronTitle: "",
            frameData: [],
            comboData: [],
            modalData: [],
            selectedData: "",
            dmg: 0,
            hits: 0,
            comboModal: false,
            showMenu: false,
            chosenCharacter: "Characters",
            image: ""
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);

    };

    showComboModal = () => {
        this.resetData();
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
        this.resetData();
        this.showComboModal();
    }

    resetData = () => {
        this.setState({
            frameData: [],
            comboData: [],
            modalData: [],
            selectedData: "",
            dmg: 0,
            hits: 0,
        });
        API.getFrameData(this.state.chosenCharacter).then(res => {
            let comboStarters = [];
            res.data.forEach(move => {
                if (move.onHit >= 3) {
                    comboStarters.push(move);
                }
            });
            this.setState({
                frameData: res.data,
                modalData: comboStarters,
            });
        });
    }

    getCharacterData = event => {
        event.preventDefault();
        let character = this.state.chosenCharacter;
        if (this.state.chosenCharacter === "Characters") {
            character = event.target.innerHTML;
        }
        let characterImage;
        images.forEach(characters => {
            if (character === characters.name) {
                return characterImage = characters.image
            }
        });

        API.getFrameData(character).then(res => {
            let comboStarters = [];
            res.data.forEach(move => {
                if (move.onHit >= 3) {
                    comboStarters.push(move);
                }
            });

            console.log("Your Data:", res.data)
            this.setState({
                frameData: res.data,
                jumbotronTitle: character,
                chosenCharacter: character,
                modalData: comboStarters,
                image: characterImage
            });
        });
    };


    damageFormatter = (data) => {
        let nums = data.split(' ');
        let hits = this.state.hits;
        let total = this.state.dmg;

        console.log("The Nums: ", nums, "The total: ", total);


        if (hits > 2) {
            if (nums[2] && typeof (parseInt(nums[2])) === 'number') {
                total = total + (parseInt(nums[2]) * .9);
            }
            total = total + (parseInt(nums[0]) * .9);
        }
        else {
            if (nums[2] && typeof (parseInt(nums[2])) === 'number') {
                total = total + parseInt(nums[2]);
                hits++
            }
            total = total + parseInt(nums[0]);
            hits++
        }

        console.log("Checking Total:", total);


        this.setState({
            dmg: total,
            hits: hits
        })
    }

    moveSelector = event => {
        event.preventDefault();
        let selected = event.target.innerHTML;
        let comboArray = this.state.comboData;
        this.state.frameData.forEach(moves => {
            if (moves.move === selected) {
                //Adds Move Obj into comboArray
                comboArray.push(moves);
                //returns selected for buttons.
                return selected = moves
            }
        }, console.log("complete loop"));
        
        this.damageFormatter(selected.damage);
        this.setState({
            selectedData: selected,
            comboData: comboArray,
        }, function () {
            //Just a callback to check if set state completes.
            console.log('complete');
        });
        this.handleComboButtons(selected);
    }


    handleComboButtons = (selected) => {

        //Creates an empty array for setting the state for later
        let moveButtons = []

        this.state.frameData.forEach(move => {
            if (parseInt(selected.onHit) >= parseInt(move.startup) && move.moveType !== 'throw' &&
                move.moveType !== 'aerial normal' && move.moveType !== 'vskill') {
                console.log("Going into movesButtons: ", move.move);
                moveButtons.push(move)
            } else {
                if (selected.moveType === 'normal' && selected.cancels.split(' ').includes('sp')) {
                    this.state.frameData.forEach(move => {
                        if (move.moveType === 'special') {
                            moveButtons.push(move)
                        }
                    });
                }
            }
        });
        console.log("What's turning into buttons: ", moveButtons);
        this.setState({
            modalData: moveButtons
        });
    }



    render() {
        return (
            <div className='wrapper'>
                {this.state.comboModal ? <div onClick={this.closeComboModal} className="back-drop"></div> : null}
                <Jumbotron
                    title={this.state.jumbotronTitle ? this.state.jumbotronTitle + " Frame Data" : "Character Select"}
                >

                    <img className='jumbotron-image' alt={this.state.chosenCharacter} src={this.state.image} />

                    <DropdownMenu
                        name={this.state.chosenCharacter}
                        show={this.state.showMenu}
                        showDropdown={this.showDropdown}
                    >
                        <DropdownItem
                            name='Ryu'
                            getData={this.getCharacterData}
                        />
                    </DropdownMenu>

                </Jumbotron>
                {this.state.frameData.length ?

                    <button onClick={this.showComboModal} className='btn btn-primary'>Make a Combo</button>

                    : null}

                <ComboModal
                    className='modal'
                    show={this.state.comboModal}
                    close={this.closeComboModal}
                    availableMoves={this.state.modalData}
                    moveSelector={this.moveSelector}
                    move={this.state.selectedData.move}
                    src={this.state.selectedData.gif}
                    combo={this.state.comboData}
                    dmg={this.state.dmg}
                    hits={this.state.hits}
                />
            </div>
        )
    }
}

export default Ryu;
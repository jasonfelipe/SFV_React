import React, { Component } from "react";
import { CRow, CTable} from "../components/Tables/CombosTable";
import { ComboModal } from "../components/Modals";
import { Jumbotron } from "../components/Jumbotron";
import { DropdownMenu, DropdownItem } from "../components/DropdownMenu";
import API from '../utils/API';
import './css/style.css';
import images from '../utils/images.json';

// Stuff to do ~
// Particulars about distancing in combos (hit blowback);
// Can a move be done more than twice in a combo? Three times?; 
// Should true hits be implemented?;
// How does juggles work? (EX Tatsu -> Shoryu, Tatsu -> EX Shoryu, etc);
// Implement V Trigger cancels combos (May needa DB update);

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
            image: "",
            submitted: 0,
            comboImage: null
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);

    };

    showComboModal = () => {
        this.resetData();
        this.setState({
            comboModal: true
        });
    }

    closeComboModal = () => {
        this.setState({
            submitted: 0,
            comboModal: false
        });
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
            comboImage: null
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
            // console.log("Your Data:", res.data)
            this.setState({
                frameData: res.data,
                jumbotronTitle: character,
                chosenCharacter: character,
                modalData: comboStarters,
                image: characterImage
            });
        });

        API.getComboData(character).then(res => {
            // console.log(res);
            this.setState({
                comboData: res.data
            })

        })
    };


    damageFormatter = (data) => {

        //Database values split up.
        let nums = data.split(' ');
        let hits = this.state.hits;
        let total = this.state.dmg;

        // console.log("The Nums: ", nums, "The total: ", total);

        //Damage reduction
        if (hits > 2) {
            if (nums[2] && typeof (parseInt(nums[2])) === 'number') {
                total = total + (parseInt(nums[2]) * (1 - (hits * .1)));
            }
            total = total + (parseInt(nums[0]) *  (1 - (hits * .1)));
        }
        else {
            if (nums[2] && typeof (parseInt(nums[2])) === 'number') {
                total = total + parseInt(nums[2]);

                //In reality we should have two variables, true hits, and scaling hits.
                hits++
            }
            total = total + parseInt(nums[0]);
            hits++
        }
        // console.log("Checking Total:", total);
        this.setState({
            dmg: total,
            hits: hits
        });
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

        //Goes through each move...
        this.state.frameData.forEach(move => {
            //Checking certain key values...
            if (parseInt(selected.onHit) >= parseInt(move.startup) && move.moveType !== 'throw' &&
                move.moveType !== 'aerial normal' && move.moveType !== 'vskill') {
                console.log("Going into movesButtons: ", move.move);
                moveButtons.push(move);
            }

            //If not met and other certain variables are met...
            if (moveButtons.length === 0 && selected.moveType === 'normal' && selected.cancels.split(' ').includes('sp')) {
                this.state.frameData.forEach(move => {
                    if (move.moveType === 'special') {
                        moveButtons.push(move)
                    }
                });
            }

            if (moveButtons.length === 0 && selected.moveType === 'special') {
                this.state.frameData.forEach(move => {
                    if (move.moveType === 'super') {
                        moveButtons.push(move)
                    }
                });
            }

        });
        //Setting the state per usual.
        this.setState({
            modalData: moveButtons
        });
    }

    submitCombo = () => {
        console.log("Send it in baby!");
        let character = this.state.chosenCharacter;
        let moves = []
        this.state.comboData.forEach(move => 
            moves.push(move.move)
        );

        let data = {
            combo: moves.toString(),
            character : character,
            damage: this.state.dmg,
            hits: this.state.hits,
            image: this.state.comboImage
        };

        API.postCombo(character, data).then((res, err) =>  {
            if (err) {
                throw err;
            }
            console.log(res);
            this.setState({
                submitted: 1
            });   
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

                
                {this.state.comboData.length > 0 ?
                    <div className='container'>
                        <h2 className='center'>{this.state.chosenCharacter}'s Combos!</h2>
                        <CTable>
                            {this.state.comboData.map(data =>
                                <CRow
                                    key={data.id}
                                    comboID={data.id}
                                    combo={data.combo.replace(/,/g, ' -> ')}
                                    dmg={data.damage}
                                    hits={data.hits}
                                />
                            )}
                        </CTable>
                    </div>
                    :
                    <h1>
                        Choose your character
                    </h1>
                }




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
                    submit={this.submitCombo}
                />
            </div>
        )
    }
}

export default Ryu;
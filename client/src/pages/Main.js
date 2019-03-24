import React, { Component } from "react";
import API from '../utils/API';
import './css/style.css'

class Main extends Component {
    constructor(props, context){
        super(props, context)
        this.getCharacterData = this.getCharacterData.bind(this);
        this.state = {
            jumbotronTitle: "",
            data: [],
            modalView: false,
        }

    }
    getCharacterData = event => {
        event.preventDefault();
        API.getFrameData(event.target.innerHTML).then(res => {
            console.log(res.data);
        });
    }


    render(){
        return (
            <div className='jumbotron'>
                        <h1>Main Menu</h1>
                        <h2 className='center'>Character Select</h2>
                        <button id='ryu' onClick={this.getCharacterData} className='btn btn-primary'>Ryu</button>
            </div>
        )
    }
}

export default Main;
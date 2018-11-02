import React, { Component } from 'react';
import "./Tutorial.css";

class Tutorial extends Component{

    render(){
        return(
            <div id="tutorial">
                <div id="fala"><p>Bem Vindo ao PSL Enterprises!</p></div>
                <div id="paulo"></div>
                <button onClick={this.props.sair}>SAIR</button>
            </div>
        );
    }
}

export default Tutorial;
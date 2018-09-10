import React, { Component } from 'react';
import "./Resposta.css";

class Resposta extends Component{
    render(){
        return(
            <div id="resposta">
                <button onClick={this.props.responder}>
                    {this.props.lista[this.props.posicao]}
                </button>
            </div>
        );
    }
}

export default Resposta;
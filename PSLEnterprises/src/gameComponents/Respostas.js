import React, { Component } from 'react';
import "./Respostas.css";

class Respostas extends Component{

    render(){
        return(
            <div id="respostas">
                 {this.props.lista.map(i => (
                    <button className="resposta" key={i} onClick={this.props.responder(i)}><p>{i}</p></button>
                ))}
            </div>
        );
    }
}

export default Respostas;
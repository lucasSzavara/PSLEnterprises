import React, { Component } from 'react';
import "./Animacao.css";
import Interface from './Interface';

class Animacao extends Component{

    atualizar(){
        setTimeout(this.props.atualizar, 1000);
    }

    render(){
        return(
            <div id="animacao">
                <Interface idUser={this.props.idUser} token={this.props.token} atualizar={this.props.atualizar}/>
            </div>
        );
    }
}

export default Animacao;
import React, { Component } from 'react';
import "./FimDeJogo.css";


class FimDeJogo extends Component{
    dict = {
        utilizacao: 'utilização',
        organizacao: 'organização',
        limpeza: 'limpeza',
        saude: 'saúde',
        disciplina: 'disciplina',
    };

    render(){
        return(
            <div id="fimdejogo">
                <div id="fala"><img src={require('./images/balao.png')} width="300" height="210"/><p>O seu senso de {this.dict[this.props.zero]} chegou à zero! Sua empresa faliu!</p></div>
                <img id="paulo" src={require("./images/paulo.png")} alt="PAULO G." height="200"/>
                <button onClick={this.props.voltar}>RECOMEÇAR</button>
            </div>
        );
    }
}

export default FimDeJogo;
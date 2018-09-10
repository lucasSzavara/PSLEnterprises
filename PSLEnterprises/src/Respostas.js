import React, { Component } from 'react';
import "./Respostas.css";
import BotaoControle from './BotaoControle';
import Resposta from './Resposta';

class Respostas extends Component{
    render(){
        return(
            <div id="respostas">
                <BotaoControle clicar={this.props.esquerda} lado="<" posicao="esquerda"/>
                <Resposta responder={this.props.responder} lista={this.props.lista} posicao={this.props.posicao}/>
                <BotaoControle clicar={this.props.direita} lado=">" posicao="direita"/>
            </div>
        );
    }
}

export default Respostas;
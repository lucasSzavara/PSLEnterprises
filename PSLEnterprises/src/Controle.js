import React, { Component } from 'react';
import Botao from './Botao'
import "./Controle.css";

class Controle extends Component{

    render(){
        return(
            <div id="controle">
                <Botao texto="Decisões"/>
                <Botao texto="Relações"/>
                <Botao texto="Financeiro"/>
            </div>
        );
    }
}

export default Controle;
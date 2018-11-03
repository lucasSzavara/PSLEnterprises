import React, { Component } from 'react';
import "./Interface.css";
import BarraValores from './BarraValores';
import Decisoes from './Decisoes';


class Interface extends Component{

    render(){
        if(this.props.idUser != 0)
            return(
                <div id="interface">
                    <Decisoes pergunta={this.props.pergunta} lista={this.props.lista} gif={this.props.gif} idUser={this.props.idUser} atualizar={this.props.atualizarValores} token={this.props.token}/>
                    <div className="Valores">
                        <BarraValores valor={`${this.props.utilizacao}%`} nome="Seiri (Utilização)"/>
                        <BarraValores valor={`${this.props.organizacao}%`} nome="Seiton (Organização)"/>
                        <BarraValores valor={`${this.props.disciplina}%`} nome="Shitsuke (Disciplina)"/>
                        <BarraValores valor={`${this.props.saude}%`} nome="Seiketsu (Higiene)"/>
                        <BarraValores valor={`${this.props.limpeza}%`} nome="Seiso (Limpeza)"/>
                        <h3 id="produc"> Produção: R${this.props.producao}</h3>
                        <h3 id="gastos">Gastos: R${this.props.gastos}</h3>
                    </div>
                </div>
            );
        return(
            <div>
                Esperando
            </div>
        );
    }
}

export default Interface;
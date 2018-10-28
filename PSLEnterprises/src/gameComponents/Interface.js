import React, { Component } from 'react';
import "./Interface.css";
import BarraValores from './BarraValores';
import Decisoes from './Decisoes';


class Interface extends Component{

    constructor(props){
        super(props);

        this.state = {
            pergunta: '',
            resposta: [],
            utilizacao: 75,
            organizacao: 75,
            disciplina: 75,
            saude: 75,
            limpeza: 75,
            producao: 1000000,
            gastos: 10000
        };
    }

    atualizarValores = (dados) => {
        this.setState(dados);
    }

    componentDidMount(){
        console.log(this.props.idUser);
    }

    render(){
        console.log(this.props.idUser);
        if(this.props.idUser != 0)
            return(
                <div id="interface">
                    <Decisoes idUser={this.props.idUser} atualizar={this.atualizarValores} token={this.props.token}/>
                    <div className="Valores">
                        <BarraValores valor={`${this.state.utilizacao}%`} nome="Utilização"/>
                        <BarraValores valor={`${this.state.organizacao}%`} nome="Organização"/>
                        <BarraValores valor={`${this.state.disciplina}%`} nome="Disciplina"/>
                        <BarraValores valor={`${this.state.saude}%`} nome="Saúde"/>
                        <BarraValores valor={`${this.state.limpeza}%`} nome="Limpeza"/>
                        <h3 id="produc">R${this.state.producao}</h3>
                        <h3 id="gastos">R${this.state.gastos}</h3>
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
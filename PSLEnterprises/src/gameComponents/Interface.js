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
            gastos: 10000,
            perdeu: false
        };
    }

    atualizarValores = (dados) => {
        this.setState(dados);
        this.props.atualizar(dados.perdeu);
    }

    componentDidMount(){
        console.log(this.props.idUser);
    }

    render(){
        console.log(this.props.idUser);
        if(this.props.idUser != 0)
            return(
                <div id="interface">
                    <Decisoes gif={this.props.gif} idUser={this.props.idUser} atualizar={this.atualizarValores} token={this.props.token}/>
                    <div className="Valores">
                        <BarraValores valor={`${this.state.utilizacao}%`} nome="Seiri (Utilização)"/>
                        <BarraValores valor={`${this.state.organizacao}%`} nome="Seiton (Organização)"/>
                        <BarraValores valor={`${this.state.disciplina}%`} nome="Shitsuke (Disciplina)"/>
                        <BarraValores valor={`${this.state.saude}%`} nome="Seiketsu (Higiene)"/>
                        <BarraValores valor={`${this.state.limpeza}%`} nome="Seiso (Limpeza)"/>
                        <h3 id="produc"> Produção: R${this.state.producao}</h3>
                        <h3 id="gastos">Gastos: R${this.state.gastos}</h3>
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
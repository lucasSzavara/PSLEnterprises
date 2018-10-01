import React, { Component } from 'react';
import Interface from './Interface';
import BarraValores from './BarraValores';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            pergunta: '',
            resposta: '',
            utilizacao: 75,
            organizacao: 75,
            disciplina: 75,
            saude: 75,
            limpeza: 75,
            producao: 75,
            gastos: 75
        };
    }

    atualizarValores = (dados) => {
        this.setState(dados)
    }

    render() {
        return (
            <div className="App">
                <Interface atualizar={this.atualizarValores}/>
                <BarraValores valor={`${this.state.utilizacao}%`} nome="Utilização"/>
                <BarraValores valor={`${this.state.organizacao}%`} nome="Organização"/>
                <BarraValores valor={`${this.state.disciplina}%`} nome="Disciplina"/>
                <BarraValores valor={`${this.state.saude}%`} nome="Saúde"/>
                <BarraValores valor={`${this.state.limpeza}%`} nome="Limpeza"/>
            </div>
        );
    }
}

export default App;

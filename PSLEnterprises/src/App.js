import React, { Component } from 'react';
import Interface from './gameComponents/Interface';
import Tutorial from './gameComponents/Tutorial';
import Animacao from './gameComponents/Animacao';
import Formulario from './loginComponents/Formulario';
import Controle from './loginComponents/Controle';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            atual: "cadastro",
            id: 0,
            perdeu: false,
            utilizacao: 75,
            organizacao: 75,
            disciplina: 75,
            saude: 75,
            limpeza: 75,
            producao: 1000000,
            gastos: 10000,
            resposta: '',
            pergunta: '',
            resposta: []
        };
    }
    
    irParaLogin = () => {
        this.setState({atual: "login"});
    }
    
    irParaCadastro = () => {
        this.setState({atual: "cadastro"});
    }

    gif = () =>{
        this.setState({atual: "animacao"});
    }

    sairTutorial = () => {
        this.setState({atual: 'jogo'});
    }

    atualizar = (dados) => {
        this.setState(dados);
    }

    login = (texto, login, senha) =>{
        return(
            () => {
                this.setState({atual: 'tutorial'});
                let obj = JSON.stringify({'nome': login, 'senha': senha});
                fetch(`http://localhost:8000/${texto}/`, {method: 'POST', headers: {'Content-type': 'application/json'}, body: obj}).then(promessa => promessa.json()).then(dados => {
                    this.setState({'id': dados.id});
                    fetch('http://localhost:8000/o/token/', {method: 'POST', headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                        }, body: `grant_type=password&client_id=bCsbK8F9uOUYHPPOiY2bnqBMvaU6nMtCB3hCwavX&client_secret=A1lAKjYNsSNuDskq7Rw71WFS5P4zEebhXBZAzPg9KVT1QyCjctc147c0sKzFJyDsaBEjgvFErDirzS934ndTRVNlwYf3DkhbnYQo1JNo7Uqy0VgbQaBSJZr3P4K29uWE&username=${login}&password=${senha}`}).then(promessa => promessa.json()).then(dados =>{
                            this.setState({'token': dados.access_token});
                    });
                });
            }
        );
    }

    render() {
        if (this.state.atual === 'tutorial') {
            return(
                <Tutorial sair={this.sairTutorial}/>
            );
        }
        else if(this.state.atual === 'animacao'){
            return(
                <Animacao gif={this.gif} sair={this.sairTutorial} utilizacao={this.state.utilizacao} disciplina={this.state.disciplina} organizacao={this.state.organizacao} saude={this.state.saude} limpeza={this.state.limpeza} producao={this.state.producao} gastos={this.state.gastos}/>
            );
        }
        else if(this.state.id == 0 || this.state.token == undefined){
            return(
                <div id="tela">
                    <div id="form">
                        <h2>Faça o Login ou cadastre-se</h2>
                        <Controle login={this.irParaLogin} cadastro={this.irParaCadastro} ativo={this.state.atual}/>
                        <Formulario tela={this.state.atual} login={this.login}/>
                    </div>
                </div>
            );
        }
        return(
            <Interface pergunta={this.state.pergunta} lista={this.state.resposta} gif={this.gif} idUser={this.state.id} token={this.state.token} atualizarValores={this.atualizar} utilizacao={this.state.utilizacao} disciplina={this.state.disciplina} organizacao={this.state.organizacao} saude={this.state.saude} limpeza={this.state.limpeza} producao={this.state.producao} gastos={this.state.gastos}/>
        );
    }
}

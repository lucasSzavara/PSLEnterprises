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
            perdeu: false
        };
    }
    
    irParaLogin = () => {
        this.setState({atual: "login"});
    }
    
    irParaCadastro = () => {
        this.setState({atual: "cadastro"});
    }

    atualizar = (dado) =>{
        this.setState({'perdeu': dado});
    }

    gif = () =>{
        this.setState({atual: 'animacao'})
    }

    sairTutorial = () => {
        this.setState({atual: 'jogo'});
    }

    login = (texto, login, senha) =>{
        return(
            () => {
                this.setState({atual: 'tutorial'});
                let obj = JSON.stringify({'nome': login, 'senha': senha});
                fetch(`http://localhost:8000/${texto}/`, {method: 'POST', headers: {'Content-type': 'application/json'}, body: obj}).then(promessa => promessa.json()).then(dados => {
                    this.setState({'id': dados.id});
                    console.log(this.state);
                    fetch('http://localhost:8000/o/token/', {method: 'POST', headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                        }, body: `grant_type=password&client_id=bCsbK8F9uOUYHPPOiY2bnqBMvaU6nMtCB3hCwavX&client_secret=A1lAKjYNsSNuDskq7Rw71WFS5P4zEebhXBZAzPg9KVT1QyCjctc147c0sKzFJyDsaBEjgvFErDirzS934ndTRVNlwYf3DkhbnYQo1JNo7Uqy0VgbQaBSJZr3P4K29uWE&username=${login}&password=${senha}`}).then(promessa => promessa.json()).then(dados =>{
                            console.log(dados);
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
                <Animacao idUser={this.state.id} token={this.state.token} atualizar={this.sairTutorial}/>
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
            <Interface gif={this.gif}idUser={this.state.id} token={this.state.token} atualizar={this.atualizar}/>
        );
    }
}

import React, { Component } from 'react';
import "./Decisoes.css";
import Pergunta from './Pergunta';
import Respostas from './Respostas';

class Decisoes extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            pergunta: "",
            lista: [],
            posicao: 0
        };
    }

    escolherPergunta = () => {
        fetch('http://localhost:8000/usuario/1/', {method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'id': 1, 'ult_alt': 'none'})
        }).then(promessa => promessa.json()).then(dados => {
            console.log(dados);
            let perguntaAtual =  dados.texto_pergunta;
            let resposta = dados.texto_resposta;
            this.setState({pergunta: perguntaAtual, lista: resposta})
        });
    }
    direita = () => {
        if (this.state.posicao !== this.state.lista.length - 1) {
            this.setState({posicao: this.state.posicao + 1});
        } else {
            this.setState({posicao: 0});
        }
    }

    esquerda = () => {
        if (this.state.posicao !== 0) {
            this.setState({posicao: this.state.posicao - 1});
        } else {
            this.setState({posicao: this.state.lista.length - 1});
        }
    }

    responder = () => {
        console.log(this.state.posicao);
        console.log(this.state.pergunta);
        this.escolherPergunta();
    }

    componentDidMount(){
        this.escolherPergunta();
    }

    render(){

        return(
            <div id="decisoes">
                <Pergunta pergunta={this.state.pergunta}/>
                <Respostas responder={this.responder} esquerda ={this.esquerda} direita={this.direita} lista={this.state.lista} posicao={this.state.posicao}/>
            </div>
        );
    }
}

export default Decisoes;
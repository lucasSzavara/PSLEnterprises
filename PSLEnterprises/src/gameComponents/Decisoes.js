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
            escolhida: "",
        };
    }

    escolherPergunta = (respostaEscolhida) => {
        console.log(this.props.idUser);
        return(
            () =>{
                this.setState({'escolhida': respostaEscolhida});
                let obj = JSON.stringify({'id': this.props.idUser, 'pergunta': this.state.pergunta || 'none', 'resposta': respostaEscolhida || 'none'});
                console.log(obj);
                fetch(`http://localhost:8000/usuario/${this.props.idUser}/`, {method: 'PUT',
                            headers: {'Content-Type': 'application/json',
                                      'Authorization': `Bearer ${this.props.token}`},
                            body: obj
                }).then(promessa => promessa.json()).then(dados => {
                    let perguntaAtual =  dados.pergunta;
                    let resposta = dados.resposta;
                    this.props.atualizar(dados);
                    this.setState({pergunta: perguntaAtual, lista: resposta});
                });
            }
        );
    }

    componentDidMount(){
        this.escolherPergunta("")();
    }

    render(){
        return(
            <div id="decisoes">
                <Pergunta pergunta={this.state.pergunta}/>
                <Respostas responder={this.escolherPergunta} lista={this.state.lista}/>
            </div>
        );
    }
}

export default Decisoes;
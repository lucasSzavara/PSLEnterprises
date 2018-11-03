import React, { Component } from 'react';
import "./Decisoes.css";
import Pergunta from './Pergunta';
import Respostas from './Respostas';

class Decisoes extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            escolhida: "",
        };
    }

    escolherPergunta = (respostaEscolhida) => {
        return(
            () =>{
                this.setState({'escolhida': respostaEscolhida});
                let obj = JSON.stringify({'id': this.props.idUser, 'pergunta': this.props.pergunta || 'none', 'resposta': respostaEscolhida || 'none'});
                fetch(`http://localhost:8000/usuario/${this.props.idUser}/`, {method: 'PUT',
                            headers: {'Content-Type': 'application/json',
                                      'Authorization': `Bearer ${this.props.token}`},
                            body: obj
                }).then(promessa => promessa.json()).then(dados => {
                    this.props.atualizar(dados);
                });
            }
        );
    }

    componentDidMount(){
        if(this.props.pergunta == "")
            this.escolherPergunta("")();
    }

    render(){
        return(
            <div id="decisoes">
                <Pergunta pergunta={this.props.pergunta}/>
                <Respostas gif={this.props.gif} responder={this.escolherPergunta} lista={this.props.lista}/>
            </div>
        );
    }
}

export default Decisoes;
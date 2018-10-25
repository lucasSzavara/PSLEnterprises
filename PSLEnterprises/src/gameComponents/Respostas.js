import React, { Component } from 'react';
import "./Respostas.css";

class Respostas extends Component{

    // gerarRespostas = () => {
    //     let respostas = document.getElementById('respostas');
    //     for(let i of this.props.lista){
    //         respostas.innerHTML += <div><Botao texto={i}/></div>
    //         console.log(respostas);
    //     }
    //     return respostas;
    // }

    render(){
        return(
            <div id="respostas">
                 {this.props.lista.map(i => (
                    <button className="resposta" key={i} onClick={this.props.responder(i)}>{i}</button>
                ))}
            </div>
        );
    }
}

export default Respostas;
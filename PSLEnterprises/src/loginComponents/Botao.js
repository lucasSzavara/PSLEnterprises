import React, { Component } from 'react';
import './Botao.css';
import { Link } from 'react-router-dom';

class Botao extends Component {

  preparar(texto){
    if(texto){
      return texto.toUpperCase();
    }
    return 'BOTÃO';
  }

  render() {
    if(this.props.texto === this.props.ativo)
      return(
        <button onClick={this.props.clicar} className="ativo">{this.preparar(this.props.texto)}</button>
      );

    return (
      <button onClick={this.props.clicar}>{this.preparar(this.props.texto)}</button>
    );
  }
}

export default Botao;
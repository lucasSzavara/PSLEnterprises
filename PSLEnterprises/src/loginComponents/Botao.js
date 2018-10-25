import React, { Component } from 'react';
import './Botao.css';

class Botao extends Component {

  preparar(texto){
    if(texto){
      return texto.toUpperCase();
    }
    return 'BOTÃO';
  }

  render() {
      return (
          <button onClick={this.props.clicar}>{this.preparar(this.props.texto)}</button>
    );
  }
}

export default Botao;
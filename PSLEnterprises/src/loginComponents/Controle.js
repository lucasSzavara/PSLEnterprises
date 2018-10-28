import React, { Component } from 'react';
import './Controle.css';

import Botao from './Botao';

class Controle extends Component {
  render() {
      return (
        <div id="controle">
          <Botao texto="cadastro" clicar={this.props.cadastro} ativo={this.props.ativo}/>
          <Botao texto="login" clicar={this.props.login} ativo={this.props.ativo}/>
        </div>
    );
  }
}

export default Controle;
import React, { Component } from 'react';
import './Controle.css';

import Botao from './Botao';

class Controle extends Component {
  render() {
      return (
        <div id="controle">
          <Botao texto="cadastro" clicar={this.props.cadastro}/>
          <Botao texto="login" clicar={this.props.login}/>
        </div>
    );
  }
}

export default Controle;
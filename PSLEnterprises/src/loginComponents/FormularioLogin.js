import React, { Component } from 'react';

import Botao from './Botao';

class FormularioLogin extends Component {
  render() {
      return (
        <div className="formulario">
          <input type="email" placeholder="Login" />
          <input type="password" placeholder="Senha" />
          <Botao texto="Login"/>
        </div>
    );
  }
}

export default FormularioLogin; 
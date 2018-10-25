import React, { Component } from 'react';

import Botao from './Botao';

class FormularioCadastro extends Component {
  render() {
      return (
        <div className="formulario">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Documento" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Senha" />
          <Botao texto="cadastrar"/>
        </div>
    );
  }
}

export default FormularioCadastro;
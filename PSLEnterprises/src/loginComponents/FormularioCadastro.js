import React, { Component } from 'react';
import Botao from './Botao';

class FormularioCadastro extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
        nome: "",
        senha: ""
    };
  }
  clicar = () => {
    this.props.login('cadastro', this.state.nome, this.state.senha)();
  }

  render() {
      return (
        <div className="formulario" >
          <input id="nome" type="text" placeholder="Nome" onChange={(mud) => {this.setState({'nome': mud.target.value});}}/>
          <input id="senha" type="password" placeholder="Senha" onChange={(mud) => {this.setState({'senha': mud.target.value});}}/>
          <Botao texto="cadastrar" clicar={this.clicar}/>
        </div>
    );
  }
}

export default FormularioCadastro;
import React, { Component } from 'react';
import Botao from './Botao';

class FormularioLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
        nome: "",
        senha: ""
    };
  }

  clicar = () => {
    this.props.login('login', this.state.nome, this.state.senha)();
  }
  
  render() {
      return (
        <div className="formulario">
          <input type="email" placeholder="Login" onChange={(mud) => {this.setState({'nome': mud.target.value});}}/>
          <input type="password" placeholder="Senha" onChange={(mud) => {this.setState({'senha': mud.target.value});}}/>
          <Botao texto="entrar" clicar={this.clicar}/>
        </div>
    );
  }
}

export default FormularioLogin; 
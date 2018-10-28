import React, { Component } from 'react';
import './Formulario.css'

import FormularioCadastro from './FormularioCadastro';
import FormularioLogin from './FormularioLogin';

class Formulario extends Component {

  render() {
    if(this.props.tela === "login"){
     return(
      <FormularioLogin login={this.props.login}/>
     );
    }
    else if(this.props.tela === "cadastro"){
      return (
        <FormularioCadastro login={this.props.login}/>
      );
    }
    return (<div></div>);
  }
}

export default Formulario;
import React, { Component } from 'react';
import "./Botao.css";

class Botao extends Component{
    
    
    preparar(texto){
        if(texto){
          return texto.toUpperCase();
        }
        return 'BOTÃO';
    }
    

    render(){
        return(
            <div>
                <button>{this.preparar(this.props.texto)}</button>
            </div>
        );
    }
}

export default Botao;
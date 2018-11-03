import React, { Component } from 'react';
import "./Animacao.css";
import BarraValores from './BarraValores';

class Animacao extends Component{

    atualizar = () => {
        setTimeout(this.props.sair, 750);
    }

    render(){
        this.atualizar();
        return(
            <div id="animacao">
                <div className="Valores">                        
                    <BarraValores valor={`${this.props.utilizacao}%`} nome="Seiri (Utilização)"/>
                    <BarraValores valor={`${this.props.organizacao}%`} nome="Seiton (Organização)"/>
                    <BarraValores valor={`${this.props.disciplina}%`} nome="Shitsuke (Disciplina)"/>
                    <BarraValores valor={`${this.props.saude}%`} nome="Seiketsu (Higiene)"/>
                    <BarraValores valor={`${this.props.limpeza}%`} nome="Seiso (Limpeza)"/>
                    <h3 id="produc"> Produção: R${this.props.producao}</h3>
                    <h3 id="gastos">Gastos: R${this.props.gastos}</h3>
                </div>
            </div>
        );
    }
}

export default Animacao;
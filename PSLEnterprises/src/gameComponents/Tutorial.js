import React, { Component } from 'react';
import "./Tutorial.css";

class Tutorial extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            falas: ['Bem vindo ao PSL Enterprises!',
                'Meu nome é Paulo G. e eu tenho uma ótima notícia para você!',
                'Você acabou de ser promovido e agora é o CEO da nossa empresa!',
                'Como CEO dessa empresa você terá apenas duas funções:',
                '1º: Maximizar a produção',
                '2º: Diminuir o gasto',
                'Para fazer isso, não se esqueça de manter seus funcionários sempre felizes!',
                'Na nossa empresa costumamos usar os 5S para manter um clima saudável',
                ''],
            i: 0
        }
    }

    proximo = () =>{
        this.setState({i: this.state.i + 1});
    }

    render(){
        if(this.state.i === this.state.falas.length - 1) {
            return(
                <div id="tutorial">
                    <div id="fala"><img src={require('./images/balao.png')} width="300" height="210"/><p>{this.state.falas[this.state.i]}</p></div>
                    <img id="paulo" src={require("./images/paulo.png")} alt="PAULO G." height="200"/>
                    <button onClick={this.props.sair}>SAIR</button>
                </div>
            );
        }
        else {
            return(
                <div id="tutorial">
                    <div id="fala"><img src={require('./images/balao.png')} width="300" height="210"/><p>{this.state.falas[this.state.i]}</p></div>
                    <img id="paulo" src={require("./images/paulo.png")} alt="PAULO G." height="200"/>
                    <button onClick={this.proximo}>PRÓXIMO</button>
                </div>
            );  
        }
        
    }
}

export default Tutorial;
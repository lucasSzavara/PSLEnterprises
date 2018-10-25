import React, { Component } from 'react';
import "./Pergunta.css";


class Pergunta extends Component{
    render(){
        return(
            <div id="pergunta">
                {this.props.pergunta}
            </div>
        );
    }
}

export default Pergunta;
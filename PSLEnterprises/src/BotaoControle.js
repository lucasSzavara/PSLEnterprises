import React, { Component } from 'react';
import "./BotaoControle.css";

class BotaoControle extends Component{
    
    render(){
        return(
            <div id={this.props.posicao}>
                <button onClick={this.props.clicar}>{this.props.lado}</button>
            </div>
        );
    }
}

export default BotaoControle;
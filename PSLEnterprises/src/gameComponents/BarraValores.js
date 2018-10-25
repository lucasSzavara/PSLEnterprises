import React, { Component } from 'react';
import './BarraValores.css';

class BarraValores extends Component {
    render() {
        return (
            <div className="barraValores">
                <div className="valor" style={{width: this.props.valor}}></div>
                <p>{this.props.nome}</p>
            </div>
        );
    }
}

export default BarraValores;
import React, { Component } from 'react';
import './BarraValores.css';

class BarraValores extends Component {
    render() {
        return (
            <div className="barraValores">
                <div className="valor" style={{width: this.props.valor}}></div>
            </div>
        );
    }
}

export default BarraValores;
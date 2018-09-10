import React, { Component } from 'react';
import Controle from './Controle';
import Interface from './Interface';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Controle/>
                <Interface/>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Interface from './Interface';
import BarraValores from './BarraValores';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Interface/>
                <BarraValores valor={"50%"}/>
            </div>
        );
    }
}

export default App;

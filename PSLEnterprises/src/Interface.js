import React, { Component } from 'react';
import "./Interface.css";
import Decisoes from './Decisoes';


class Interface extends Component{
    render(){
        return(
            <div id="interface">
                <Decisoes id={1}/>
            </div>
        );
    }
}

export default Interface;
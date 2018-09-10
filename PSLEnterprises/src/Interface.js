import React, { Component } from 'react';
import "./Interface.css";
import Decisoes from './Decisoes';


class Interface extends Component{
    render(){
        return(
            <div id="interface">
                <Decisoes/>
            </div>
        );
    }
}

export default Interface;
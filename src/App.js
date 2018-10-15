// simpsons-quotes/src/App.js
import React, { Component } from "react";
import "./App.css";
import logo from './logo.svg';
import Lamp from "./Lamp"
import Quote from "./Quote";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working : false
        };
    }
    changeWorking = () => {
        this.setState({ working: !this.state.working });
    };
    render() {
            const workingState = this.state.working ? 'Homer travaille' : 'Homer est en pause';
            const textColor = this.state.working ? 'App-green' : 'App-red';

        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className= {`App-title ${textColor}`} >Simpsons Quotes</h1>
            </header>
            <Lamp on />
            <Lamp />
            <button onClick = {this.changeWorking} >        {workingState.toUpperCase()}
            </button>
            <Quote
            quote="I believe the children are the future... Unless we stop them now!"
            character="Homer Simpson"
            image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
            />
            <Quote
            quote="Me fail English? That's unpossible"
            character="Ralph Wiggum"
            image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
            />
        </div>
        );
    }
}

export default App;
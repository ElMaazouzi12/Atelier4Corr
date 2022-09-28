import React, { Component } from "react";
import './style.css';
import Valeur from './Valeur'

class Counter extends Component {
    constructor () {
        super()
    
    this.state = {
            counter : 0,
            step : 1,
            change : null
        }
    }

    Increment = () => {
        this.setState({counter: this.state.counter + this.state.step})
        this.setState({change : true})
    }

    Decrement = () => {
        this.setState({counter: this.state.counter - this.state.step})
        this.setState({change : false})
    }

    Initialiser = () => {
        this.setState({counter: 0})
        this.setState({change : null})
    }
    stepUp1 = () => {
        this.setState({step: 1})
    }

    stepUp2 = () => {
        this.setState({step: 2})
    }
    stepUp3 = () => {
        this.setState({step: 3})
    }
    stepUp4 = () => {
        this.setState({step: 4})
    }

    stepDown1 = () => {
        this.setState({step: 1})
    }

    stepDown2 = () => {
        this.setState({step: 2})
    }
    stepDown3 = () => {
        this.setState({step: 3})
    }
    stepDown4 = () => {
        this.setState({step: 4})
    }
    
    render() {
        return <div className="container">
                    <div className="panel">
                        <Valeur change = {this.state.change} counter={this.state.counter}/>
                    </div>
                    <div className="btn-container">
                        <button className="first-btn" onClick={this.Increment}>Incrementer</button>
                        <button className="first-btn" onClick={this.Decrement}>Decrementer</button>
                        <button className="first-btn" onClick={this.Initialiser}>Initialiser</button>
                    </div>
                    <fieldset>
                        <legend>Pas d'Incrementation</legend>
                        <button className="second-btn" onClick={this.stepUp1}>1</button>
                        <button className="second-btn" onClick={this.stepUp2}>2</button>
                        <button className="second-btn" onClick={this.stepUp3}>3</button>
                        <button className="second-btn" onClick={this.stepUp4}>4</button>
                    </fieldset>
                    <fieldset>
                        <legend>Pas de decrementation</legend>
                        <button className="second-btn" onClick={this.stepDown1}>1</button>
                        <button className="second-btn" onClick={this.stepDown2}>2</button>
                        <button className="second-btn" onClick={this.stepDown3}>3</button>
                        <button className="second-btn" onClick={this.stepDown4}>4</button>
                    </fieldset>
                </div>
    }
}

export default Counter;
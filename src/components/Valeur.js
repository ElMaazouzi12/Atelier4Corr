import React, { Component } from "react";

class Valeur extends Component {
    constructor (props) {
        super(props)
        this.state = {
            change : null
        }
    }

    render() {
        return <h2 style={{color: this.props.change ? '#23c483' : this.props.change == null ? '#00d4ff' : 'red'}}>{this.props.counter}</h2>
    }
}

export default Valeur;  
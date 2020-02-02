import React, { Component } from 'react';
import './css/progressbar.css';

class Filler extends Component {
    render() {
        return (
            <div className="filler" style={{ width: `${this.props.percentage}%` }} />
        );
    }
}

export default Filler;
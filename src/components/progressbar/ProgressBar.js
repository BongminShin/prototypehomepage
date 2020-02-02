import React, { Component } from 'react';
import './css/progressbar.css';
import Filler from './Filler';

class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            percentage: props.percentage || 0
        }
    }

    render() {
        return (
            <div className="progress-bar-linear">
                <p className="progress-bar-text">{ this.props.barText }</p>
                <div className="progress-percentage">
                    <span className="progress-bar-text">{`${ this.state.percentage}%`}</span>
                </div>
                <div className="progress-bar-skills">
                    <Filler percentage={this.state.percentage} />
                </div>
            </div>
        );
    }
}

export default ProgressBar;
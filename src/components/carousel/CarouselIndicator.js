import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarouselIndicator extends Component {
    render() {
        return (
            <li>
                <Link className={this.props.index === this.props.activeIndex ? "carousel__indicator carousel__indicator--active" : "carousel__indicator"} to={'/'}
                        onClick={this.props.onClick}/>
            </li>
        );
    }
}

export default CarouselIndicator;
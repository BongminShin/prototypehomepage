import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarouselArrow extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return (
            <Link className={`carousel__arrow carousel__arrow--${this.props.direction}`} to={'/'} onClick={this.props.onClick}>
                <div className={`carousel__icon carousel__icon--${this.props.direction}`} />
            </Link>
        );
    }
}

export default CarouselArrow;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/3.png'

class SlideCarousel extends Component {
    render() {
        return (
            <div className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} alt="Los Angeles"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/2.png" alt="Chicago"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/3.png" alt="New York"/>
                    </div>
                </div>

                <Link className="carousel-control-prev" to="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>
                <Link className="carousel-control-next" to="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </Link>
            </div>
        );
    }
}

export default SlideCarousel;
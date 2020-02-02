import React, { Component } from 'react';
import CarouselArrow from './CarouselArrow';
import CarouselSlide from './CarouselSlide';
import CarouselIndicator from './CarouselIndicator';
import './css/carousel.scss';

class BasicCarousel extends Component {
    constructor(props) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel">
                    <CarouselArrow direction="left" onClick={e => this.goToPrevSlide(e)} />

                    <ul className="carousel__slides">
                        {this.props.slides.map((slide, index) =>
                            <CarouselSlide
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                slide={slide}
                            />
                        )}
                    </ul>

                    <CarouselArrow direction="right" onClick={e => this.goToNextSlide(e)} />

                    <ul className="carousel__indicators">
                        {this.props.slides.map((slide, index) =>
                            <CarouselIndicator
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                isActive={this.state.activeIndex===index} 
                                onClick={e => this.goToSlide(index)}
                            />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BasicCarousel;
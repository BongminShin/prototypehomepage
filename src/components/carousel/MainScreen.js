import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainScreen extends Component {
    render() {
        return (
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Punny headline</h1>
                    <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <Link class="btn btn-outline-secondary" to={'/'}>Coming soon</Link>
                </div>
                <div class="product-device box-shadow d-none d-md-block"></div>
                <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        );
    }
}

export default MainScreen;
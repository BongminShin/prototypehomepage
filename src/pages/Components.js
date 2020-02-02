import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Form from './Form';
import Board from './Board';
import BoardForm from '../components/board/BoardForm';
import { FaChevronCircleRight } from 'react-icons/fa';
import NavTabDisplay from '../components/navtab/NavTabDisplay';
import CarouselDisplay from '../components/carousel/CarouselDisplay';

export class Components extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row mt-3 mb-3">
                    <div className="col-2">
                        <div className="list-group">
                            <Link className="list-group-item text-secondary" to={`${this.props.match.url}/board`}><FaChevronCircleRight/> Board</Link>
                            <Link className="list-group-item text-secondary" to={`${this.props.match.url}/boardform`}><FaChevronCircleRight/> Board Form</Link>
                            <Link className="list-group-item text-secondary" to={`${this.props.match.url}/formValidate`}><FaChevronCircleRight/> Form Validate</Link>
                            <Link className="list-group-item text-secondary" to={`${this.props.match.url}/navtab`}><FaChevronCircleRight/> Navigation Tab</Link>
                            <Link className="list-group-item text-secondary" to={`${this.props.match.url}/carousel`}><FaChevronCircleRight/> Carousel</Link>
                        </div>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path={`${this.props.match.path}/board`} component={Board}/>
                            <Route path={`${this.props.match.path}/boardform`} component={BoardForm}/>
                            <Route path={`${this.props.match.path}/formValidate`} component={ Form }/>
                            <Route path={`${this.props.match.path}/navtab`} component={NavTabDisplay}/>
                            <Route path={`${this.props.match.path}/carousel`} component={CarouselDisplay}/>
                            <Redirect to={`${this.props.match.path}/board`}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

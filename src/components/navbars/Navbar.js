import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DropdownMenu from '../DropdownMenu';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
          location:[
            {
                id:0,
                title: 'New York',
                selected: false,
                key:'location'
            },
            {
                id:1,
                title: 'Dublin',
                selected: false,
                key:'location'
            },
            {
                id:2,
                title: 'California',
                selected: false,
                key:'location'
            },
            {
                id:3,
                title: 'Istanbul',
                selected: false,
                key:'location'
            },
            {
                id:4,
                title: 'Izmir',
                selected: false,
                key:'location'
            },
            {
                id:5,
                title: 'Oslo',
                selected: false,
                key:'location'
            }
          ],
          navToggle:true,
          navToggleText:''
        }
    }

    handleClickToggleIcon = () => {
        this.setState(prevState => (prevState.navToggle ? {navToggleText:"show", navToggle: !prevState.navToggle } : {navToggleText:"", navToggle: !prevState.navToggle}));
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link className="navbar-brand nav-a-link" to={'/'}>Ben's Playground</Link>
                    <button className="navbar-toggler" type="button" onClick={this.handleClickToggleIcon}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${this.state.navToggleText}`}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/components'}>Components</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={'/board'}>Board</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/formValidate'}>Form Validate</Link>
                            </li> */}
                            {/* <DropdownMenu title="Select location" list={this.state.location}/> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
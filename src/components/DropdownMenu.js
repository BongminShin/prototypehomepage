import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DropdownMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    handleClickOutside(){
        this.setState({
            listOpen:false
        });
    }

    toggleList(){
        this.setState(prevState=>({
            listOpen: !prevState.listOpen
        }));
    }

    render() {
        const {list} = this.props;
        const {listOpen, headerTitle} = this.state;
        return (
            <li className="nav-item dropdown">
                <label className="nav-link dropdown-toggle" onClick={()=>this.toggleList()}>{headerTitle}</label>
                {listOpen && <div className="dropdown-menu show" onClick={()=>this.handleClickOutside()}>
                    {list.map((item)=>(
                        <Link className="dropdown-item" to={`/${item.title}`} key={item.id}>{item.title}</Link>
                    ))}
                </div>}
            </li>
        );
    }
}

export default DropdownMenu;
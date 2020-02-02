import React, { Component } from 'react';

class NavTab extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state={
            activeIndex: 0
        }
    }

    handleChange(index){
        this.setState({activeIndex:index});
    }

    render() {
        return (
            <React.Fragment>
                {/* <li class="nav-item">
		            <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">First Panel</a>
	            </li> */}
                <ul className="nav nav-tabs">
                    {this.props.contents.map((elem,index)=>{ 
                        let style = index === this.state.activeIndex ? 'active': '';
                        return <li className="nav-item" key={index}>
                                    <div className={`nav-link ${style}`} to="" onClick={e => this.handleChange(index)}>{elem.title}</div>
                                </li>})}
                </ul>
                <div className="tab-content">
                    {this.props.contents.map((elem, index) =>{
                        let style = index === this.state.activeIndex ? 'active': '';
                        return <div key={index} className={`tab-pane border-tab-content ${style}`}>{elem.content}</div>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default NavTab;
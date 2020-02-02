import React, { Component } from 'react';

class BoardForm extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    handleClick = (history) => {
        history.push('/');
    }

    render() {
        return (
            <div className="container margin-top-bottom-30">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFirst">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputLast">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" placeholder="1234 Main St"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={ () => this.handleClick(this.props.history)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BoardForm;
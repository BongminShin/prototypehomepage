import React, { Component } from "react";

class ComponentsDetail extends Component {

    render(){
        console.log(this.props);
        return (
            <React.Fragment>
                <h2>Component Details</h2>
                <dt>id</dt>
                <dd>{this.props.match.params.id}</dd>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </React.Fragment>
        );
    }
}

export default ComponentsDetail;
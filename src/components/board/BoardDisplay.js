import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardDisplay extends Component {

    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);

        this.state = {
            boards: [
                {
                    brdno: 1,
                    brdfirst: 'Mark',
                    brdlast: 'Otto',
                    brddate: new Date()
                },
                {
                    brdno: 2,
                    brdfirst: 'Jacob',
                    brdlast: 'Thornton',
                    brddate: new Date()
                },
                {
                    brdno: 3,
                    brdfirst: 'Larry',
                    brdlast: 'The Brid',
                    brddate: new Date()
                }
            ]
        }
    }

    onClickHandler(e){

    }

    render() {
        return (
            <div className="container-fluid margin-top-bottom-30">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.boards.map((elem, index) => {
                            return <tr key={index}>
                                    <th scope="row">{elem.brdno}</th>
                                    <td>{elem.brdfirst}</td>
                                    <td>{elem.brdlast}</td>
                                    <td>{elem.brddate.toLocaleDateString('en-au')}</td>
                                    </tr>
                        })}
                        
                    </tbody>    
                </table>
                <Link to="/boardform">
                    <button className="btn btn-outline-primary">Add</button>
                </Link>    
            </div>
        );
    }
}

export default BoardDisplay;
import React from "react";
import { Link } from "react-router-dom";
import { users } from "../data/data.json";

function ComponentList({match}){
    return (
        <React.Fragment>
                {users.map(({ id, name }) => (
                    <div><Link to={`${match.url}/${id}`}>{name}</Link></div>
                ))}
        </React.Fragment>
    );
}

export default ComponentList;
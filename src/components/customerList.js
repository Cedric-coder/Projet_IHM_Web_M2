import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <>
        <h1>Liste des clients</h1>
        <ul>
            {props.tasks.map(item => <li className="CustomerLine" key={item.id}>
                <label className="CustomerFullName" id={"CustomerFullName-"+item.id}>
                    {item.fullName}
                </label>
                <label className="CustomerEmail" id={"CustomerEmail-"+item.id}>
                    {item.email}
                </label>
                <Link to={"/" + item.id}>Détails</Link>
            </li>)}
        </ul>
    </>;
}

export default CustomerList;
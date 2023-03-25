// src/components/TodoList.js

import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => <li key={item.id}>
                <label id="customer-${item.id}">
                    {item.fullName}
                </label>
                <label id="customer-${item.id}">
                    {item.email}
                </label>
                <Link to={item.id + "/details"}>Details</Link>
            </li>)}
        </ul>
    </>;
}

export default CustomerList;
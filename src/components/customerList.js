import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => 
            <Link to={"/" + item.id} className="fullWidth">
                <li className="CustomerLine fullWidth" key={item.id}>
                    <div className="halfWidth">
                        <label className="CustomerFullName" id={"CustomerFullName-"+item.id}>
                            {item.fullName}
                        </label>
                    </div>
                    <div className="halfWidth">
                        <label className="CustomerEmail" id={"CustomerEmail-"+item.id}>
                            {item.email}
                        </label>
                    </div>
                </li>
            </Link>
            )}
        </ul>
    </>;
}

export default CustomerList;
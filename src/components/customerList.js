import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => 
            <li className="CustomerLine" key={item.id}>
                <Link to={"/" + item.id} className="buttonStyle fitContent">
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
                </Link>
            </li>
            )}
        </ul>
    </>;
}

export default CustomerList;
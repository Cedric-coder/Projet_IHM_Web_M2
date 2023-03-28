import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <>
        <Link className="buttonStyle fitContent" to={"/create"} key="LinkToCreate">
            <div>
                Créer un client
            </div>
        </Link>
        <ul>
            {props.tasks.map(item => 
            <Link to={"/" + item.id} className="fullWidth" key={item.id}>
                <li className="CustomerLine fullWidth">
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
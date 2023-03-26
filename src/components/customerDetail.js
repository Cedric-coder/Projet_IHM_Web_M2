import React from "react";
import { Link } from "react-router-dom";


const CustomerDetail = (props) => {
    const item = props.tasks;
    return <>
        <div className="DetailHeader" id={"customer-"+item.id}>
                <div>
                    <h3 id={"customerName-"+item.id}>
                        Fiche de {item.fullName}
                    </h3>
                </div>
                <div>
                    <label id={"customerMail-"+item.id}> 
                        ({item.email})
                    </label>
                </div>
                <div>
                    <Link className="buttonStyle fitContent"  to={"/"}>
                        Retour aux clients
                    </Link>
                </div>
        </div>
    </>;
}

export default CustomerDetail;
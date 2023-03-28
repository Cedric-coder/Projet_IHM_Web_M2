import React from "react";
import { Link } from "react-router-dom";


const CustomerDetail = (props) => {
    console.log("aaaaaaaaaaaaaaaa");
    console.log(props);
    const item = props.tasks;
    return <>
        <div className="DetailHeader" id={"customer-"+item.id}>
                <div>
                    <h1 id={"customerName-"+item.id}>
                        Fiche de {item.fullName}
                    </h1>
                </div>
                <div>
                    <label id={"customerMail-"+item.id}> 
                        ({item.email})
                    </label>
                </div>
                
                <Link className="buttonStyle fitContent tinyMargin"  to={"/"}>
                    <div>
                        Retour aux clients
                    </div>
                </Link>
        </div>
    </>;
}

export default CustomerDetail;
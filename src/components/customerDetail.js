import React from "react";
import { Button} from 'react-bootstrap';


const CustomerDetail = (props) => {
    const item = props.tasks;
    return <>
        <div id={"customer-"+item.id}>
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
                <a href="/">
                    <Button variant="contained"> Retour aux clients </Button>
                </a>
        </div>
    </>;
}

export default CustomerDetail;
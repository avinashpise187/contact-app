import React from "react";
import Contactcard from "./Contactcard";

const ContactList =(props)=>{
    console.log(props);
    const rendercontactList = props.contacts.map((contacts)=>{
        return(
            <Contactcard contacts={contacts}></Contactcard>
           
        );
    });
return <div className="ui celled list">
    {rendercontactList}
    </div>

}
export default ContactList;


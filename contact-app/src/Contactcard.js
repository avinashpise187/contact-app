import React from "react";
import user from '../src/images/account.png';

const Contactcard=(props)=>{
    const {id,name,email}=props.contacts;
return(
    <div className="item">
<img style={{height:"40px"}} src={user} alt="user" />
    <div className="contact">
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i  style={{color:"red",alignContent:"center",marginRight:"20px"}} className=" ui trash alternate outline icon"></i>
</div>
);
}

export default Contactcard;
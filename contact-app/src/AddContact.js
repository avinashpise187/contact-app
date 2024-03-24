import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:"",
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name===""&& this.state.email===""){
            alert("All the field are Mandatord..!");
        }
        
    }
render(){
    return(
        <div className="ui main">
            <h2>Add Contacts</h2>
            <form className="ui form" onSubmit={this.AddContact}>
                <div className="ui field">
                    <label >Name</label>
                    <input type="text" name="name"placeholder="Name" 
                    value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}/>
                </div>
                <div className="ui field">
                    <label>Email</label> 
                    <input type="email" name="Email"placeholder="Email" value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}/>
                </div>
                <button className="ui button blue">ADD</button>
            </form>
        </div>
    );
}
}
export default AddContact;
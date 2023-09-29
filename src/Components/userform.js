
import axios from axios;
import { useState } from "react";

export default function UserForm(props){

 const [formData,setNewFormData]=useState({
    name:"",
    email:"",
    address:""
 })

 const inputChangeHandler=(e)=>{
    setNewFormData((formData)=>({
        ...formData,
        [e.target.name]:e.target.value
    }))
 }

 const handleSubmit=(e)=>{

    e.prventDeafault();
    let newUser=formData;
    axios.post("http://localhost:8080/api/users",newUser)
        .then(resp=>props.history.push('/UserList'))
        .catch(err=>consolog.log("error",err));

 }

 return(
    <div className="container">
        <h1>Add User</h1>
        <div className="row">
                <div className="col-md-6 offset-3">
                    <form onSubmit={handleSubmit} className="form">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control"
                                value={formData.name} onChange={inputChangeHandler}/>
                                 <label>Email</label>
                            <input type="text" name="email" className="form-control"
                                value={formData.email} onChange={inputChangeHandler}/>
                                 <label>Address</label>
                            <input type="text" name="address" className="form-control"
                                value={formData.address} onChange={inputChangeHandler}/>
                            <input type="submit" value="Submit Data"></input>

                    </form>
                </div>
        </div>
    </div>
 )


}
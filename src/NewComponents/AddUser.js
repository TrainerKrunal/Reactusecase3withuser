
import { useState } from "react";
import UserService from "../Service/userService";

export default function AddUser(){

    const initial={id:null,name:"",email:"",address:""};

    const [formData,setNewFormData]=useState(initial)

    const [submitted,setSubmiited]=useState(false);

    const newUser=()=>{
        setNewFormData(initial);
        setSubmiited(false);
    }

    const handleInputChange=(evt)=>{
        const {name,value}=evt.target;
        setNewFormData({...formData,[name]:value})

    }

    const saveUser=()=>{
        var data={
            name:formData.name,
            email:formData.email,
            address:formData.address
        };
        UserService.create(data).then(
            response=>{
                console.log(response);
                setSubmiited(true);
            }
        ).catch(e=>{
            console.log(e);
        })
    }

    return(
        <div className="submit-form">
            { submitted ? (
                <div>
                    <h4>Form Submtted Successfully</h4>
                    <button className="btn btn-success" onClick={newUser}>
                        Add
                    </button>
                 </div>
            ): (
                <div>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               required
                               value={formData.name}
                               onChange={handleInputChange}
                               name="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               required
                               value={formData.email}
                               onChange={handleInputChange}
                               name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="address">Address:</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               required
                               value={formData.address}
                               onChange={handleInputChange}
                               name="address"/>
                    </div>
                    <button onClick={saveUser} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    )

}
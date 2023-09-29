import axios from axios;
import { useState,useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";

export default function UserDetails(){



    const [user,setNewUser]=useState({ id:"",name:"", email:"",address:""})

    const params=useParams();

    const apiEndPoint="http://localhost:8080/api/users/"+params.id;

    const history=useHistory();

    const getData=async()=>{
        const result=await axios.get(apiEndPoint);
        if(result.data.status==200){
            setNewUser(result.data.body);
            //toast.success("Success Message")
        }
        else{
            console.log("Something goes wrong")
            //toast.warning("Data is not loaded from teh server")
        }
        
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div>

         <button className="btn btn-secondary" onClick={history.goBack}></button>
         <h1>User</h1>
         <ul className="list-group">
            <li className="list-group-item">Id:{user.id}</li>
            <li className="list-group-item">Name:{user.name}</li>
            <li className="list-group-item">Email:{user.email}</li>
            <li className="list-group-item">Address:{user.address}</li>       
         </ul>

        </div>
    )

}
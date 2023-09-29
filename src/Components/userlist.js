
import axios from axios;
import { useState,useEffect } from "react";

export default function UserList(props){


    const apiEndPoint="http://localhost:8080/api/users/"

    const [users,setNewUsers]=useState([]);

    const deleteUser=(id)=>{
        axios.delete(apiEndPoint+id)
        .then((result)=>{
            props.hisotry.push("/useList")
        })
    }

    const editUser=(id)=>{
        props.hisotry.push({
            pathName:"edit/"+id
        })
    }

    const viewUser=(id)=>{
        props.hisotry.push({
            pathName:"view/"+id
        })
    }

    useEffect(()=>{
        axios.get(apiEndPoint).then(response=>{
            setNewUsers(response.data.body)
        })
        .catch(error=>
            {console.log(error);setNewUsers([])
        })
    },[users])

    const tabRows=users.map((user,i)=>{
        return(
            <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                    <div className="btn-group">
                    <button className="btn btn-warning" onClick={() => { viewuser(user.id) }}>View</button>
                    <button className="btn btn-warning" onClick={() => { edituser(user.id) }}>Edit</button>
                    <button className="btn btn-warning" onClick={() => { deleteuser(user.id) }}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    })
    return(
        <div>
            <h1>User Data</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRows}
                </tbody>
            </table>
        </div>
    )

}
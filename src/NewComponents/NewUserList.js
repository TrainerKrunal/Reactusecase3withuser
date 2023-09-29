import { useState,useEffect } from "react";
import UserService from "../Service/userService";

export default function NewUserList(){


    const [users,setUsers]=useState(null);


    useEffect(()=>{
        retriveUsers();
    },[])


    const retriveUsers=()=>{
        UserService.getAll().then(response=>{
            setUsers(response.data);
        }).catch(e=>{
            console.log(e);
        })
    }


    return(
        <div>
            <h4>User List</h4>
            <table className="table table-bordered table-striped">

                    <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                               <th>Address</th>
                            </tr>
                            <tbody>
                                {users && 
                                    users.map((user,index)=>{
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                        </tr>
                                    })}
                            </tbody>
                    </thead>

            </table>
        </div>
    )

}
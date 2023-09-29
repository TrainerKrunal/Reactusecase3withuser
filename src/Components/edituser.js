
import axios from axios;
import { useEffect,useState } from "react";
import { useHistory,useParams } from "react-router-dom";


export default function EditUser(props){


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

    const inputChangeHandler=(e)=>{
        setNewUser((user)=>({
            ...user,
            [e.target.name]:e.target.value
        }))
     }

     const UpdateUser=(e)=>{
        e.prventDeafault();
        axios.put(apiEndPoint,user)
            .then(resp=>props.history.push('/UserList'))
            .catch(err=>consolog.log("error",err));
    
     }

     return(
        <div className="container">
            <button className="btn btn-secondary" onClick={history.goBack}>Back</button>
            <h1>Update User</h1>
            <div className="row">
                    <div className="col-md-6 offset-3">
                        <form onSubmit={UpdateUser} className="form">
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
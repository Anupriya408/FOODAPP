import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { event } from '../../../Backend/models/User';

export default function Signup() {
  const[details,setdetails] = useState({name:"",email:"",password:"",geolocation:""})

const handleSubmit = async(e) => {
       e.preventDefault();
      const response =await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'

        },
          body:JSON.stringify({name:details.name,email:details.email,password:details.password,location:details.geolocation})
      });
      const json=await response.json();
      console.log(json);

      if(!json.success){
        alert("enter valid data");
      }
}


const onChange=(event)=>{
    setdetails({...details,[event.target.name]:event.target.value})
}


  return (
    <div>
    <div className='container'>

    <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter your Name</label>
    <input type="text" className="form-control" id="name" name='name' value={details.name} onChange={onChange}/>
    <div id="nameHelp" className="form-text">Hope You Trust Me.....</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email address</label>
    <input type="email" className="form-control" name='email' value={details.email} onChange={onChange} id="exampleInputEmail1" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={details.password} onChange={onChange}  id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={details.geolocation} onChange={onChange}  id="exampleInputEmail1" />
  </div>
  
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </div>
  )
}

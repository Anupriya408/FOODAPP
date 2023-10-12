import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
 
    const[details,setdetails] = useState({email:"",password:""})
    let navigate = useNavigate()

const handleSubmit = async(e) => {
       e.preventDefault();
      const response =await fetch("http://localhost:5000/api/loginuser",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'

        },
          body:JSON.stringify({email:details.email,password:details.password})
      });
      const json=await response.json();
      console.log(json);

      if(!json.success){
        alert("enter valid data");
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
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
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email address</label>
    <input type="email" className="form-control" name='email' value={details.email} onChange={onChange} id="exampleInputEmail1" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={details.password} onChange={onChange}  id="exampleInputEmail1" />
  </div>
  
  
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>I am a  new User</Link>
</form>
</div>
    </div>
  )
}

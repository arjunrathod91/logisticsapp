import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const VolLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const submit= (e)=>{
    e.preventDefault();
    axios.get('http://localhost:3002/getVolunteer', {
      params: { email, password }
    })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching user:', error); 
      });

  }

    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
        </div>
        <h4 className="text-center mt-2 fw-bold mb-3">Log In</h4>

        <form  className="form-container" onSubmit={submit}>
         
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signupbtn fw-bold" >Log In</button>
        </form>
        <p style={{color:"rgb(19, 83, 83)"}}><Link>forgot password?</Link></p>
         <p style={{color:"#48B09D",paddingTop:"10px"}}>Not Registered yet?<span ><Link to="/volregister">Sign Up</Link></span> </p>
      </div>
     );
}

export default VolLogin;
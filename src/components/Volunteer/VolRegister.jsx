import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VolRegister = () => {
  const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmpassword,setConfirmPassword] = useState()
    const [profile,setProfile] = useState()
    const navigate = useNavigate()

  const submitData=(e)=>{
    // e.preventDefault();
    // axios.post('http://localhost:3002/setVol',{username,email,password,confirmpassword,profile})
    // .then(details => console.log(details))
    // .catch(err => console.log(err))
    navigate('/volorgnization')
  }
  
  return (
    <>
      <div  className="vol-reg container d-flex flex-column justify-content-center align-items-center pt-3">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold mb-4">HelpYours!</h4>
        </div>
       
        <h4 className="text-center mt-2 fw-bold">Sign Up</h4>

        <form  className="form-container" onSubmit={submitData}>
        <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          className="form-control"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
          required
        />
      </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="password"> Confirm Password:</label>
            <input
              type="password"
              name="Confirmpassword"
              value={confirmpassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="image"> Profile Picture</label>
            <input type="file" placeholder="Choose a file" onChange={(e)=>setProfile(e.target.value)}/>
          </div>
          <Link to="/volorganization"><button type="submit" className="submitbtn">Submit</button></Link>
       </form>
       <p style={{color:"#48B09D",marginTop:"10px"}}>Already have an account ?<span className="fw-bold"><Link style={{color: "#40C6AE"}} to="/login">Log In</Link></span> </p>
      </div>
    </>
  );

};

export default VolRegister;

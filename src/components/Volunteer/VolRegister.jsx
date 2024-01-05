import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import io from 'socket.io-client';

const VolRegister = () => {
  const {voldata,setVolData} = useContext(MyContext)
  const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    // const [profile,setProfile] = useState()
    const navigate = useNavigate('')
    

  const submitData=(e)=>{
    // e.preventDefault();
    // axios.post('http://localhost:3002/setVol',{username,email,password,confirmpassword})
    // .then(details => console.log(details.data))
    // .catch(err => console.log(err))
    navigate("/volorganization")
  }

  // useEffect(() => {
  //   const socket = io('http://localhost:3002'); // Replace with your backend URL
  //   // Socket events
  //   socket.on('connect', () => {
  //     console.log('Connected to server');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //   });

  //   // Add more socket event listeners as needed

  //   // Clean up socket connection on unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);



  
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
          // required
        />
      </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              // required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              // required
            />
          </div>
          <div>
            <label htmlFor="password"> Confirm Password:</label>
            <input
              type="password"
              name="confirmpassword"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="form-control"
              // required
            />
          </div>
          {/* <div>
            <label htmlFor="image"> Profile Picture</label>
            <input type="file" placeholder="Choose a file" onChange={(e)=>setProfile(e.target.value)}/>
          </div> */}
          <button type="submit" className="submitbtn">Submit</button>
       </form>
       <p style={{color:"#48B09D",marginTop:"10px"}}>Already have an account ?<span className="fw-bold"><Link style={{color: "#40C6AE"}} to="/login">Log In</Link></span> </p>
      </div>
    </>
  );

};

export default VolRegister;

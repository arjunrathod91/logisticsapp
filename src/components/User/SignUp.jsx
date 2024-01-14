import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const {userData,setUserData} = useContext(MyContext)

  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmpassword,setConfirmPassword] = useState()
  const [location,setLocation] = useState()
  const [contact,setContact] = useState()
  const navigate = useNavigate()


  const submitData=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3002/newUser',{username,email,password,confirmpassword,location,contact})
    .then(data=>{
      setUserData(data.data)
      setSuccess(true)
        setTimeout(() => {
          navigate('/verify')
        }, 3000)
    })
    .catch(err=>{
      setFailed(true)
        setTimeout(() => {
          setFailed(false)
        }, 2000) 
    })


  }
  return (
    <>
      <div  className="sign-up container d-flex flex-column justify-content-center align-items-center pt-3">
      <div className={success ? 'alert alert-success w-[300px] text-center' : 'd-none'} role="alert">
      <FontAwesomeIcon icon={faCircleCheck} className='mr-3'/>Sign Up Successfully !
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center' : 'd-none'} role="alert">
      <FontAwesomeIcon icon={faCircleXmark} className='mr-3'/> Sign Up Failed !
      </div>
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
          id="username"
          name="username"
          className="form-control"
          onChange={(e)=>setUsername(e.target.value)}
          required
        />
      </div>
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
          <div>
            <label htmlFor="password"> Confirm Password:</label>
            <input
              type="password"
              id="Confirmpassword"
              name="Confirmpassword"
              className="form-control"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="location"> Location:</label>
            <input
              type="text"
              name="location"
              className="form-control"
              onChange={(e)=>setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact"> Contact:</label>
            <input
              type="text"
              name="contact"
              className="form-control"
              onChange={(e)=>setContact(e.target.value)}
              required
            />
          </div>

       <button type="submit" className="signupbtn fw-bold" style={{backgroundColor:'#26ABB4'}} >Sign Up</button>
      </form>
      <p style={{color:"#48B09D",marginTop:"10px"}}>Already have an account ?<span className="fw-bold"><Link style={{color: "#40C6AE"}} to="/login">Log In</Link></span> </p>

      </div>
    </>
  );

};

export default Login;

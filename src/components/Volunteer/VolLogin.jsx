import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Contexts/AllContext';

const VolLogin = () => {
  const {voldata,setVolData} = useContext(MyContext)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3002/getVolunteer', {
      params: { email, password }
    })
      .then((response) => {
        console.log(response.data);
        setVolData(response.data);
        setSuccess(true)
        setTimeout(() => {
          navigate('/mainpage')
        }, 3000)
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setFailed(true)
        setTimeout(() => {
          setFailed(false)
        }, 2000)
      });

  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
      <div className={success ? 'alert alert-success w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleCheck} className='mr-3' />Login Successfully
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleXmark} className='mr-3' />Login Failed
      </div>
      <div className="circle"></div>
      <div className="text-center">
        <h4 className="fw-bold">HelpYours!</h4>
      </div>
      <h4 className="text-center mt-2 fw-bold mb-3">Log In</h4>

      <form className="form-container" onSubmit={submit}>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signupbtn fw-bold" style={{ backgroundColor: "#26ABB4", padding: '5px', width: "300px", fontSize: "18px",color:'white' }} >Log In</button>
      </form>
      <p style={{ color: "rgb(19, 83, 83)" }}><Link>forgot password?</Link></p>
      <p style={{ color: "#48B09D", paddingTop: "10px" }}>Not Registered yet?<span ><Link to="/volregister">Sign Up</Link></span> </p>
    </div>
  );
}

export default VolLogin;

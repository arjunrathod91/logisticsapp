import {Link} from 'react-router-dom'

const Login = () => {
    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
        </div>
        <h4 className="text-center mt-2 fw-bold mb-3">Log In</h4>

        <form  className="form-container">
         
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
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
              required
            />
          </div>

        </form>
        <p style={{color:"rgb(19, 83, 83)"}}><Link>forgot password?</Link></p>

        <button type="submit" className="signupbtn fw-bold  " >Log In</button>
         <p style={{color:"#48B09D",paddingTop:"10px"}}>Not Registered yet?<span ><Link >Sign Up</Link></span> </p>
      </div>
     );
}

export default Login;
import { Link } from "react-router-dom";

const Login = () => {
  

  
  return (
    <>
      <div  className="sign-up container d-flex flex-column justify-content-center align-items-center pt-3">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold mb-4">HelpYours!</h4>
        </div>
        <h4 className="text-center mt-2 fw-bold">Sign Up</h4>

        <form  className="form-container">
        <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
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
          <div>
            <label htmlFor="password"> Confirm Password:</label>
            <input
              type="password"
              id="Confirmpassword"
              name="Confirmpassword"
              className="form-control"
              required
            />
          </div>

       <Link to="/verify"><button type="submit" className="signupbtn fw-bold" >Sign Up</button></Link>
       <p style={{color:"#48B09D",marginTop:"10px"}}>Already have an account ?<span className="fw-bold"><Link style={{color: "#40C6AE"}} to="/login">Log In</Link></span> </p>
       </form>
      </div>
    </>
  );

};

export default Login;

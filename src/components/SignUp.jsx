import { Link } from "react-router-dom";

const Login = () => {
  

  
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
          <p className="heroparagraph">Your help is our priority</p>
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

       <Link to="/login"><button type="submit" className="signupbtn fw-bold" >Sign Up</button></Link>
       <p style={{color:"rgb(19, 83, 83)"}}>Already have an account ?<span className="fw-bold"><Link to="/login">Log In</Link></span> </p>
       </form>
      </div>
    </>
  );

};

export default Login;

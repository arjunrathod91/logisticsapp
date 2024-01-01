import {Link} from 'react-router-dom'

const Login = () => {
    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center ">
        <div className="circle"></div>
        <div className="text-center">
          <h4 className="fw-bold">HelpYours!</h4>
          <p className="heroparagraph">Your help is our priority</p>
        </div>
        <h4 className="text-center mt-2 fw-bold">Log In</h4>

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
          <p style={{color:"rgb(19, 83, 83)"}}><Link>forgot password?</Link></p>

          <button type="submit" className="signupbtn fw-bold" >Log In</button>
        </form>
      </div>
     );
}

export default Login;
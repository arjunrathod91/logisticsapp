import {Link} from 'react-router-dom'
import {logo} from '../assets/logo.png'

const Hero = () => {
    return(
         <>
           <div className ='container d-flex flex-column justify-content-center align-items-center' style={{paddingTop:"100px"}}>
                <img src={logo} className="circle" />
               <div className="text-center">
                 <h4 className="fw-bold">HelpYours!</h4>
                  <p className="heroparagraph">Your help is our priority</p>
               </div>
               <div className="herobtnparent">
                <Link to="/chooseauth"><button className="herobtn">Get Started</button></Link> 
               </div>
           
           </div>
         </>
    )
}


export default Hero;

import {Link} from 'react-router-dom'

const Hero = () => {
    return(
         <>
           <div className ='container d-flex flex-column justify-content-center align-items-center pt-5'>
               <div className="circle"></div>
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
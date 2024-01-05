import { Link } from 'react-router-dom';
import Header from '../Header'


const UserEmergencyInfo = () => {
    return ( 
        <div className='container'>
        <Header />
        <form className ='emergencyform fw-bold' style={{marginTop:"50px"}}>
         
        <div className='mb-2'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your Name'
            className="form-control "
            required
            
          />
        </div>
        <div  className='mb-2'>
          <label htmlFor="contact">Contact No.</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder='Enter Your Mobile No.'
            className="form-control"
            required
          />
        </div>
        <div  className='mb-2'>
          <label htmlFor="text">What Help?</label>
          <textarea
            type="textarea"
            id="help"
            name="help"
            placeholder='Write in brief'
            className="form-control"
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            required
          />
        </div>
          <p>use current location</p>
        <Link to="/nearbyhelpers"><button className='submitbtn'>Submit</button></Link>

      </form>
        
         
       
        </div>
     );
}
 
export default UserEmergencyInfo;
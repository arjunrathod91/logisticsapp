import { Link } from 'react-router-dom';
import Header from '../Header'



const Responsemsg = () => {
    return ( 
        <div>
           <Header />

           <div className='container response-parent'>
              <h4>Your response is send to the volunteer!<br>
              </br> He will get back to you very soon</h4>
              <div className='container responsebtn-parent'>
                <Link><button className='responsebtn'>Go to Main Menu</button></Link>
              </div>
           </div>
          
        </div>
     );
}
 
export default Responsemsg;
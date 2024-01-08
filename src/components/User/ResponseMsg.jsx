import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'

const Responsemsg = () => {
   const navigate = useNavigate()
   setTimeout(()=>{
      navigate('/userpage')

   },10000)
    return ( 
        <div>
           <Header />

           <div className='container response-parent'>
              <h4>Your response is send to the volunteer!<br>
              </br> He will get back to you very soon</h4>
           </div>
          
        </div>
     );
}
 
export default Responsemsg;
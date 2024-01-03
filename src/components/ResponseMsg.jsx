import Header from './Header'



const Responsemsg = () => {
    return ( 
        <div>
           <Header />

           <div className='container response-parent'>
              <h4>Your response is send to the volunteer!<br>
              </br> He will get back to you very soon</h4>
              <div className='container responsebtn-parent'>
                <button className='responsebtn'>Go to Main Menu</button>
              </div>
           </div>
          
        </div>
     );
}
 
export default Responsemsg;
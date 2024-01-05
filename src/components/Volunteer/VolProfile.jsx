import React from 'react'
import VolHeader from './VolHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const VolProfile = () => {
  return (
    <div>
        <VolHeader/>
        <div className='container mt-12'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[100px] h-[100px]' />
                    <div className='start-flex flex-col'>
                        <p>Name : Arjun Rathod</p>
                        <p>Email: ar885209@gmail.com</p>
                        <p>Area : First Aid</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-10'>
                    <div>
                        <strong>About</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusamus perferendis aperiam. Facere id, 
                            sunt corrupti cumque odit recusandae laudantium quae. Quis inventore esse fugit magnam 
                            aspernatur laboriosam doloremque molestias?</p>
                    </div>
                    <div>
                        <strong>Location</strong>
                        <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-[500px] h-[200px]'/>
                        <p>Change Location</p>
                        <p><FontAwesomeIcon icon={faPhone} className='mr-2'/> Contact : 91873783893</p>
                        <button className='' style={{backgroundColor:"teal",color:"white",borderRadius:"10px"}}>Edit Information</button>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default VolProfile

import React, { useContext, useEffect, useState } from 'react'
import VolHeader from './VolHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Contexts/AllContext'

const VolProfile = () => {

    const {voldata,setVolData} = useContext(MyContext)

  return (
    <div>
        <VolHeader/>
        <div className='container mt-12'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[100px] h-[100px]' />
                    <div className='start-flex flex-col'>
                        <p>Name :{voldata.username}</p>
                        <p>Email: {voldata.email}</p>
                        <p>Area : {voldata.whatYouProvide}</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-10'>
                    <div>
                        <strong>About</strong>
                        <p>{voldata.aboutOrganization}</p>
                    </div>
                    <div>
                        <strong>Location</strong>
                        <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-[500px] h-[200px]'/>
                        <p>Change Location</p>
                        <p><FontAwesomeIcon icon={faPhone} className='mr-2'/> Contact 1 : {voldata.contact1}</p>
                        <p><FontAwesomeIcon icon={faPhone} className='mr-2'/> Contact 2 : {voldata.contact2}</p>

                        <Link to="/vol-editinfo"><button style={{backgroundColor:"teal",color:"white",borderRadius:"10px"}}>Edit Information</button></Link>
                    </div>
                    
                </div>
            </div>
            </div>
  )
}

export default VolProfile

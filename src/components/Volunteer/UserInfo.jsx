import React, { useContext } from 'react'

import VolHeader from './VolHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../../Contexts/AllContext'


const UserInfo = () => {
    return (
        <div>
            <VolHeader />
            <div className='container mt-12'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[100px] h-[100px]' />
                    <div className='start-flex flex-col'>
                        <p>Name : {userData.username}</p>+
                        <p>Email: {userData.email}</p>
                        <p>Ask for : {userData.area}</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-10'>
                    <div className='container-fluid'>
                        <strong>About</strong>
                        <p>{userData.brief}</p>
                    </div>
                    <div>
                        <strong>Media</strong>
                        <img src={userData.img} alt="" />
                    </div>
                    <div>
                        <strong>{userData.location}</strong>
                        <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-[500px] h-[200px]'/>
                        <p>Open in map</p>
                    </div>
                    <div>
                        <p onClick={''}><FontAwesomeIcon icon={faPhone} className='mr-2'/> {userData.contact}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserInfo

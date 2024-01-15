import React, { useContext } from 'react'

import VolHeader from './VolHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../../Contexts/AllContext'


const UserInfo = () => {
    return (
        <div>
            <VolHeader />
            {userData ? <div className='container mt-12'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className=' userinfo-img' />
                    <div className='start-flex flex-col'>
                        <p>Name : {userData.username}</p>+
                        <p>Ask for : {userData.help}</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-3'>
                        <strong>Location :</strong> {userData.location}
                    <div>
                        <p onClick={''}><FontAwesomeIcon icon={faPhone} className='mr-2'/> {userData.contact}</p>
                    </div>
                    
                </div>
            </div> : ''}
                <VolFooter/>
        </div>
    )
}

export default UserInfo

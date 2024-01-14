import React, { useContext } from 'react'
import VolFooter from './VolFooter'
import VolHeader from './VolHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../../Contexts/AllContext'


const UserInfo = () => {
    const {userData,setUserData} = useContext(MyContext)
    return (
        <div>
            <VolHeader />
            <div className='container mt-12'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[100px] h-[100px]' />
                    <div className='start-flex flex-col'>
                        <p><span className='fw-bold'>Name :</span>{userData.name}</p>
                        <p><span className='fw-bold'>Help :</span>{userData.help}</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-10'>
                    <div>
                        <strong><span className='fw-bold'>Location :</span>{userData.location}</strong>
                    </div>
                    <div>
                        <p onClick={''}><FontAwesomeIcon icon={faPhone} className='mr-2'/> {userData.contact}</p>
                    </div>
                    
                </div>
            </div>
            <VolFooter/>
        </div>
    )
}

export default UserInfo

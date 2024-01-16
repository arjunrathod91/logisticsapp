import React, { useContext, useEffect, useState } from 'react'
import VolHeader from './VolHeader'
import VolFooter from './VolFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Contexts/AllContext'

const VolProfile = () => {

    const { voldata, setVolData } = useContext(MyContext)

    return (
        <div>
            <VolHeader />
            { voldata ? <div className='container mt-12 h-[150vh]'>
                <div className='center-flex gap-5'>
                    <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[100px] h-[100px]' />
                    <div className='start-flex flex-col'>
                        <p>Name :{voldata.username}</p>
                        <p>Email: {voldata.email}</p>
                        <p>Area : {voldata.area}</p>
                    </div>
                </div>
                <div className='container-fluid center-flex flex-col mt-10'>
                    <div className='container-fluid'>
                        <strong style={{fontSize:'20px',fontWeight:"bold"}}>About</strong>
                        <p>{voldata.aboutOrganization}</p>
                    </div>
                    <div className='container-fluid gap-1'>
                        <span style={{fontSize:'20px',fontWeight:"bold"}}>Organization Detail</span>
                        <p>Organization Head : {voldata.organizationHead}</p>
                        <p>Number Of Workers : {voldata.numberOfWorkers}</p>
                        <p>Experience : {voldata.experience}</p>
                        <p>licence : {voldata.licence}</p>
                    </div>
                    <div className='container-fluid gap-2'>
                        <p><span  style={{fontSize:'20px',fontWeight:"bold"}}>Location :</span> {voldata.address}</p>
                        <div className='container-fluid gap-2'>
                            <span style={{fontSize:'20px',fontSize:'20px'}}>Contact</span>
                            <p><FontAwesomeIcon icon={faPhone} className='mr-2' /> Contact 1 : {voldata.contact1}</p>
                            <p><FontAwesomeIcon icon={faPhone} className='mr-2' /> Contact 2 : {voldata.contact2}</p>
                            <p>Toll Free Number : {voldata.tollFreeNumber}</p>
                            <p>Email : {voldata.email}</p>
                        </div>
                        <Link to="/vol-editinfo"><button style={{ backgroundColor: "teal", color: "white", borderRadius: "10px" }}>Edit Information</button></Link>
                    </div>

                </div>
            </div> : ''}
            <VolFooter/>
        </div>
    )
}

export default VolProfile

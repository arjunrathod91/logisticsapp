import React, { useContext, useEffect, useState } from 'react'
import VolHeader from './VolHeader'
import VolFooter from './VolFooter'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MyContext } from '../../Contexts/AllContext'

const Mainpage = () => {

  const [request,setRequest] = useState([])
  const {voldata,setVolData,userData,setUserData} = useContext(MyContext)

  const navigate = useNavigate()

  const userInfo=(e,item)=>{
    e.preventDefault()
    const userId = item._id
    axios.get(`http://localhost:3002/userDetail/${userId}`)
    .then(result=>{
      setUserData(result.data)
      navigate('/user-info')
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    const area = voldata.area
    axios.get('http://localhost:3002/newRequest',{
      params:{area}
    })
    .then((data)=>{
      setRequest(data.data)})
    .catch(err=>console.log(err))
  },[request])

  return (
    <div className="container">
      <VolHeader />
      <p className='ml-8 mt-5' style={{ fontSize: "20px", fontWeight: "bold" }}>Need a Help !</p>
      <div className='d-flex container-fluid flex-column  align-items-center'>
        { request ? request.map((item)=>(
          <div className='request-box mt-1 d-flex' onClick={(e)=>userInfo(e,item)}>
          <div className='left w-[30%] h-[100%] center-flex' >
            <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[60px] h-[60px]' style={{borderRadius:'50%'}}/>
          </div>
          <div className='right w-[70%] h-[100%] flex-column'>
          <p><span className='fw-bold'>Name :</span> {item.name}</p>
          <p><span className='fw-bold'>Help :</span> {item.help}</p>
          <p><span className='fw-bold'>Location :</span> {item.location}</p>
          </div>
        </div>
        )) : ''}
      </div>
      <VolFooter/>
    </div>
  )
}

export default Mainpage

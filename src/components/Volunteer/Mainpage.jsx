import React from 'react'
import VolHeader from './VolHeader'
import { useNavigate } from 'react-router-dom'

const Mainpage = () => {

  const nevigate = useNavigate()

    const click=()=>{
        nevigate('/user-info')
        
    }

  const requests = [
    {
      name:"Arjun Rathod",
      ask:"First Aid",
      location:"12 km away"
    },
    {
      name:"Karna Rathod",
      ask:"Food",
      location:"6 km away"
    }
  ]
  return (
    <div className="container">
      <VolHeader />
      <p className='ml-8 mt-5' style={{ fontSize: "20px", fontWeight: "bold" }}>Need a Help !</p>
      <div className='d-flex container-fluid flex-column  align-items-center'>
        {requests.map((item)=>(
          <>
          <div className='request-box mt-1 d-flex' onClick={click}>
          <div className='left w-[30%] h-[100%] center-flex' >
            <img src="https://th.bing.com/th?id=ORMS.d371f0730994d45f73252117479664bb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" className='w-[60px] h-[60px]' style={{backgroundColor:"red",borderRadius:'50%'}}/>
          </div>
          <div className='right w-[70%] h-[100%] flex-column'>
          <p>{item.name}</p>
          <p>{item.ask}</p>
          <p>{item.location}</p>
          </div>
        </div>
          </>
        ))}
      </div>

    </div>
  )
}

export default Mainpage

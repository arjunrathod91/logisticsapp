import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'
import axios from 'axios';
import { useContext, useState } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FormSelect } from 'react-bootstrap';
import { MyContext } from '../../Contexts/AllContext';


const UserEmergencyInfo = () => {
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [help, setHelp] = useState('')

  const {requestData,setRequestData} = useContext(MyContext)
  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()
      axios.post('http://localhost:3002/sendRequest', { name, contact, location, help })
        .then(data => {
          setRequestData(data.data)
          setSuccess(true)
          setTimeout(()=>{
            setSuccess(false)
            navigate('/nearbyhelpers')
          },3000)
          
        })
        .catch(err => {
          setFailed(true)
          setTimeout(()=>{
            setFailed(false)
          },3000)})
    }
  return (
    <div className='container'>
      <Header />
      <div className={success ? 'alert alert-success w-[200px] text-center container-fluid' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleCheck} className='mr-3' />Request Sent Successfully
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center container' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleXmark} className='mr-3' />Request Failed
      </div>
      <form className='emergencyform fw-bold' style={{ marginTop: "50px" }} onSubmit={sendData}>
        <div className='mb-2'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)}
            className="form-control "
            required

          />
        </div>
        <div className='mb-2'>
          <label htmlFor="contact">Contact No.</label>
          <input
            type="tel"
            id="tel"
            name="contact"
            placeholder='Enter Your Mobile No.'
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className='mb-2'>
        <label
              htmlFor="area"
              className=""
              style={{ fontSize: "19px" }}
            >
              What Do You Want
            </label>
            <FormSelect onChange={(e)=>setHelp(e.target.value)} style={{width:'280px'}}>
              <option value="">--Select--</option>
              <option value="Ambulance">Ambulance</option>
              <option value="Medicine">Medicene</option>
              <option value="FirstAid">First Aid</option>
              <option value="FireBus">Fire Bus</option>
            </FormSelect>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submitbtn' style={{background-color:#26ABB4}}>Submit</button>

      </form>



    </div>
  );
}
export default UserEmergencyInfo;

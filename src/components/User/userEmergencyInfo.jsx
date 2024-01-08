import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'
import axios from 'axios';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const UserEmergencyInfo = () => {
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const [requestData, setRequestData] = useState()
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [help, setHelp] = useState('')
  // const socket = io('http://localhost:3002');
  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()
      axios.post('http://localhost:3002/sendRequest', { name, contact, location, help })
        .then(data => {
          console.log(data.data)
          setSuccess(true)
          setTimeout(()=>{
            setSuccess(false)
            navigate('/nearbyhelpers')
          },3000)
          
        })
        .catch(err => {
          console.log(err)
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
          <label htmlFor="text">What Help?</label>
          <textarea
            type="textarea"
            id="help"
            name="help"
            placeholder='Write in brief'
            className="form-control"
            onChange={(e) => setHelp(e.target.value)}
            required
          />
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
        <p>use current location</p>
        <button type='submit' className='submitbtn'>Submit</button>

      </form>



    </div>
  );
}
export default UserEmergencyInfo;
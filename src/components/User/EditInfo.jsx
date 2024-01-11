import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Contexts/AllContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const EditInfo = () => {
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const { userData, setUserData } = useContext(MyContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const userId = userData._id

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3002/editUser/${userId}`, { username, email, password, contact, location })
      .then((data) => {
        console.log(userData._id)
        console.log(userId)
        console.log(data.data)
        setUserData(data.data)
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          navigate('/userprofile')
        }, 3000)
      })
      .catch(err => {
        console.log(err)
        setFailed(true)
        setTimeout(() => {
          setFailed(false)
        }, 2000) 
      })
  }
  return (
    <div className="d-flex container-fluid vh-100 flex-column justify-content-center align-items-center">
      <div className={success ? 'alert alert-success w-[300px] text-center' : 'd-none'} role="alert">
      <FontAwesomeIcon icon={faCircleCheck} className='mr-3'/>Login Successfully
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center' : 'd-none'} role="alert">
      <FontAwesomeIcon icon={faCircleXmark} className='mr-3'/>Login Failed
      </div>
      <div className="circle"></div>
      <strong>HelpYours !</strong>
      <div className="organization-form mt-5 d-flex flex-column justify-content-start p-3">
        <strong className="mb-4" style={{ fontSize: "24px" }}>
          Edit Information
        </strong>
        <form onSubmit={submit}>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="username"
              className=""
              style={{ fontSize: "19px" }}
            >
              Name :
            </label>
            <input
              type="text"
              className="border-b container"
              name="username"
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="email"
              className=""
              style={{ fontSize: "19px" }}
            >
              Email :
            </label>
            <input
              type="text"
              className="border-b container"
              name="email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="password"
              className=""
              style={{ fontSize: "19px" }}
            >
              Change Password :
            </label>
            <input
              type="text"
              className="border-b container"
              name="password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="contact"
              className=""
              style={{ fontSize: "19px" }}
            >
              Contact :
            </label>
            <input
              type="text"
              name="contact"
              className="border-b container"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="location"
              className=""
              style={{ fontSize: "19px" }}
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              className="border-b container"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="container-fluid mt-3" style={{ backgroundColor: "teal", width: "100px", color: "white" }}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditInfo

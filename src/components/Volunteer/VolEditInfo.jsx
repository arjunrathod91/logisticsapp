import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Contexts/AllContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const VolEditInfo = () => {
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const { voldata, setVolData } = useContext(MyContext)

  const { username, email, password, organizationName, organizationHead, area, aboutOrganization, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address } = useContext(MyContext)
  const { setUsername, setEmail, setPassword, setOrganizationName, setOrganizationHead, setArea, setAboutOrganization, setNumberOfWorkers, setExperience, setLicence, setContact1, setContact2, setTollFreeNumber, setAddress } = useContext(MyContext)


  const navigate = useNavigate()

  const submit = (e) => {
    const userId = voldata._id
    e.preventDefault()
    axios.put(`http://localhost:3002/editVol/${userId}`, { username, email, password, organizationName, organizationHead, whatYouProvide, aboutOrganization, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address })
      .then((data) => {
        // console.log(userData._id)
        // console.log(userId)
        console.log(data.data)
        setVolData(data.data)
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          navigate('/volprofile')
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
    <div className="d-flex container-fluid flex-column justify-content-center align-items-center">
      <div className={success ? 'alert alert-success w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleCheck} className='mr-3' />Information Saved
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleXmark} className='mr-3' />Failed to Save
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
          <strong className="mb-3" style={{ fontSize: "24px" }}>
          organization Details
        </strong>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organizationName"
              className=""
              style={{ fontSize: "19px" }}
            >
              Organization Name :
            </label>
            <input
              type="text"
              name="organizationName"
              className="border-b container"
              onChange={(e) => setOrganizationName(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
          <label
              htmlFor="area"
              className=""
              style={{ fontSize: "19px" }}
            >
              What You Provide
            </label>
            <FormSelect onChange={(e)=>setArea(e.target.value)}>
              <option value="">--Select--</option>
              <option value="Ambulance">Ambulance</option>
              <option value="Medicine">Medicene</option>
              <option value="FirstAid">First Aid</option>
              <option value="FireBus">Fire Bus</option>
            </FormSelect>
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organizationHead"
              className=""
              style={{ fontSize: "19px" }}
            >
              Organization Head
            </label>
            <input
              type="text"
              name="organizationHead"
              className="border-b container"
              onChange={(e) => setOrganizationHead(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="aboutOrganization"
              className=""
              style={{ fontSize: "19px" }}
            >
              About organization
            </label>
            <input
              type="text"
              name="aboutOrganization"
              className="border-b container"
              onChange={(e) => setAboutOrganization(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="numberOfWorkers"
              className=""
              style={{ fontSize: "19px" }}
            >
              Number Of Workers
            </label>
            <input
              type="text"
              name="numberOfWorkers"
              className="border-b container"
              onChange={(e) => setNumberOfWorkers(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className=""
              style={{ fontSize: "19px" }}
            >
              Experience
            </label>
            <input
              type="text"
              name="experience"
              className="border-b container"
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="licence"
              className=""
              style={{ fontSize: "19px" }}
            >
              Licence
            </label>
            <input
              type="text"
              name="licence"
              className="border-b container"
              onChange={(e) => setLicence(e.target.value)}
            />
          </div>
          <strong className="mb-3" style={{ fontSize: "24px" }}>
          Contact Details
        </strong>
          <div>
            <label
              htmlFor="contact1"
              className=""
              style={{ fontSize: "19px" }}
            >
              Contact 1
            </label>
            <input
              type="text"
              name="contact1"
              className="border-b container"
              onChange={(e) => setContact1(e.target.value)}
            />
          </div>          
          <div>
            <label
              htmlFor="contact2"
              className=""
              style={{ fontSize: "19px" }}
            >
              Contact 2
            </label>
            <input
              type="text"
              name="contact2"
              className="border-b container"
              onChange={(e) => setContact2(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="tollFreeNumber"
              className=""
              style={{ fontSize: "19px" }}
            >
              Toll Free Number
            </label>
            <input
              type="text"
              name="tollFreeNumber"
              className="border-b container"
              onChange={(e) => setTollFreeNumber(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className=""
              style={{ fontSize: "19px" }}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              className="border-b container"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="container-fluid mt-3" style={{ backgroundColor: "teal", width: "100px", color: "white" }}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default VolEditInfo

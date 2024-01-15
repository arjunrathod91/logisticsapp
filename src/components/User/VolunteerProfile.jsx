import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Header";
import { useContext, useState } from "react";
import { MyContext } from "../../Contexts/AllContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const VolunteerProfile = () => {

  const { voldata } = useContext(MyContext)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const navigate = useNavigate()

  const submit = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      navigate('/responsemsg')
    }, 2000)

  }
  return (
    <div className="container">
      <Header />
      {voldata ? <> <div className={success ? 'alert alert-success w-[300px] text-center container-fluid' : 'd-none'} role="alert">
            <FontAwesomeIcon icon={faCircleCheck} className='mr-3' />Request Sent SuccessFully
          </div>
          <div className={failed ? 'alert alert-danger w-[300px] text-center container-fluid' : 'd-none'} role="alert">
            <FontAwesomeIcon icon={faCircleXmark} className='mr-3' />Request Failed
          </div>
      <div className="row mt-5">
        <div className="d-flex gap-3">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#D9D9D9",
              borderRadius: "8px",
              border: "none",
            }}
          ></div>
          <div className="col ">
            <h6><span className="fw-bold">Name:</span>{voldata.username}</h6>
            <h6><span className="fw-bold">Organization Name:</span>{voldata.organizationName}</h6>
            <h6><span className="fw-bold">What We Provide:</span>{voldata.area}</h6>
            <h6><span className="fw-bold">Organization Head:</span>{voldata.organizationHead}</h6>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">

          <h6 className="fw-bold">About </h6>
          <p>
            {voldata.aboutOrganization}
          </p>
        </div>
        <div className="col-sm-12 ">
          <h6 className="fw-bold">Location Address</h6>
          {voldata.address}
          <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-[500px] h-[200px]' />
        </div>
        {/* <div>
          Organization Detail :
          <p>Number of Workers : {voldata.numberOfWorkers}</p>
          <p>Experience : {voldata.experience}</p>
          <p>Licence : {voldata.licence}</p>
        </div> */}
        <div>
            <h6 className="fw-bold">Location</h6>
           <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='map_img'/>
        </div>
        <div>
          <strong>Contact</strong>
          <p>Contact 1 : {voldata.contact1}</p>
          <p>Contact 2 : {voldata.contact2}</p>
          <p>Toll Free Number : {voldata.tollFreeNumber}</p>
          <p>Email : {voldata.email}</p>
        </div>
        <button className="volbtn container-fluid" style={{ color: "white" }} onClick={submit}>Ask For Help</button>
      </div> ></> : ''}
      <VolFooter/>
    </div>
  );
};

export default VolunteerProfile;

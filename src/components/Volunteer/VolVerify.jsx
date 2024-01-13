import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { FormSelect } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const VolVerify = () => {

  const [submitted, setSubmitted] = useState(false)
  const [verifyEmail, setVerifyEmail] = useState()
  const [otp, setOtp] = useState(Math.floor(10000 + Math.random() * 90000))
  const [verifyOtp, setVerifyOtp] = useState()
  const [successAlert, setSuccessAlert] = useState(false)
  const [failed, setFailed] = useState(false)

  const ref = useRef();
  const formRef = useRef();

  const { voldata, setVolData, username, email, password, confirmpassword, organizationName, organizationHead, aboutOrganization, area, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address } = useContext(MyContext)
  const navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/setVol', { username, email, password, confirmpassword, organizationName, organizationHead, aboutOrganization, area, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address})
    .then(details => {
      console.log(details.data)
      setVolData(details.data)
      console.log(voldata)
    })
    .catch(err => console.log(err))
    setSubmitted(true)
    console.log(otp)

    emailjs
      .sendForm(
        "service_01fiesq",
        "template_jdauwpi",
        formRef.current,
        "8vlDde0Y1hQ6NUYMm"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const next = () => {
    sendEmail()
    setSubmitted(true)
  }
  const submit = () => {
    if (otp == verifyOtp) {
      console.log('Your Otp Is Currect')
      setSuccessAlert(true)
      setTimeout(() => {
        setSuccessAlert(false)
        navigate('/mainpage')
      }, 2000)
    }
    else {
      console.log('Wrong Otp')
      setFailed(true)
      setTimeout(() => {
        setFailed(false)
      }, 2000)
    }
  }
  return (
    <div className="container verify-parent">
      <div className={successAlert ? 'alert alert-success w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleCheck} className='mr-3' />Otp is Currect
      </div>
      <div className={failed ? 'alert alert-danger w-[300px] text-center' : 'd-none'} role="alert">
        <FontAwesomeIcon icon={faCircleXmark} className='mr-3' />Invalid Otp
      </div>
      <div>
        <p className="circle"></p>
        <h6 className="fw-bold" style={{ color: "#000" }}>
          HelpYours!
        </h6>
      </div>
      <div className="d-flex verifyinputparnet mt-5 mb-4">
        {submitted ? <>
          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <strong className="" style={{ fontSize: "19px" }}>Enter OTP</strong>
            <input type="text"
              onChange={(e) => setVerifyOtp(e.target.value)}
              name="otp"
              className="h-[40px] text-center rounded-3"
              placeholder="XXXXX"
              style={{ letterSpacing: "15px" }}
              maxLength="5"
            />
            <button onClick={submit} className="verifybtn mt-2">Verify</button>
          </div>
        </> :
          <>
            <form onSubmit={sendEmail} ref={formRef} className="d-flex flex-column align-items-center justify-content-center gap-3">
              <strong style={{ fontSize: "19px" }}>Enter Your Email </strong>
              <input type="text" className="" name="otp" value={otp} style={{ display: 'none' }} placeholder="otp" />
              <input type="email"
                onChange={(e) => setVerifyEmail(e.target.value)}
                name="email"
                className="h-[35px] rounded-3 border border-secondary text-xl px-3"
              />
              <button type="submit" className="verifybtn mt-2">Next</button>
            </form>
          </>
        }
      </div>
    </div >
  )
}

export default VolVerify;

import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import { useContext, useState } from "react";
import axios from "axios";

const VolVerify = () => {

  const { voldata,setVolData, username, email, password, confirmpassword, organizationName, organizationHead, aboutOrganization, whatWeProvide, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address,verifyNumber,setVerifyNumber } = useContext(MyContext)

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/setVol', { username, email, password, confirmpassword, organizationName, organizationHead, aboutOrganization, whatWeProvide, numberOfWorkers, experience, licence, contact1, contact2, tollFreeNumber, address,verifyNumber})
      .then(details => {
        console.log(details)
        setTimeout(()=>{
          navigate('/mainpage')
        },2000)
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="container verify-parent">
      <div>
        <p className="circle"></p>
        <h6 className="fw-bold" style={{ color: "#000" }}>
          HelpYours!
        </h6>
      </div>
      <div className="d-flex verifyinputparnet mt-5 mb-4">
        <input type="text" 
        onChange={(e) => setVerifyNumber(e.target.value)}
        name="verifyNumber"
 />
      </div>
      <div>
        <button type="submit" onClick={submit} className="verifybtn">Verify</button>
      </div>
    </div>
  )
}

export default VolVerify;

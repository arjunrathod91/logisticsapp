import { Link } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { MyContext } from "../../Contexts/AllContext";

const VolunteerProfile = () => {

  const {voldata} = useContext(MyContext)

  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        <div className="col">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#D9D9D9",
              borderRadius: "8px",
              border: "none",
            }}
          ></div>
        </div>
        <div className="col ">
          <h6 className="fw-bold">Name:{voldata.username}</h6>
          <h6 className="fw-bold">Organization Name:{voldata.organizationName}</h6>
          <h6 className="fw-bold">What We Provide:{voldata.area}</h6>
          <h6 className="fw-bold">Organization Head:{voldata.organizationHead}</h6>
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
           <img src="https://th.bing.com/th/id/OIP.120m6teR2_tGMfdTLz_G-AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-[500px] h-[200px]'/>
        </div>
        <div>
          Organization Detail :
          <p>Number of Workers : {voldata.numberOfWorkers}</p>
          <p>Experience : {voldata.experience}</p>
          <p>Licence : {voldata.licence}</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p>Contact 1 : {voldata.contact1}</p>
          <p>Contact 2 : {voldata.contact2}</p>
          <p>Toll Free Number : {voldata.tollFreeNumber}</p>
          <p>Email : {voldata.email}</p>
        </div>

      </div>
      <button className="volbtn" style={{color:"white"}} onClick={()=>console.log(voldata)}>Ask For Help</button>
    </div>
  );
};

export default VolunteerProfile;

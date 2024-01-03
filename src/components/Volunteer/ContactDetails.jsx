import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Contexts/AllContext";
const ContactDetails = () => {

    const {latitude,longitude,setLatitude,setLongitude} = useContext(MyContext)
    
    const nevigate = useNavigate()

    const handleSubmit=()=>{
        nevigate('/')
        
    }

    const showPosition = (position) => {
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      setLatitude(userLatitude)
      setLongitude(userLongitude)
      console.log(latitude)
      console.log(longitude)
      
    };
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, ()=>console.log('error'));
      } else {
        console.log("Geolocation is not supported by this browser");
      }
  
    };
    const handleLocation=()=>{
      getLocation()
    }
  return (
    
    <div className="d-flex container-fluid vh-100 flex-column justify-content-center align-items-center">
      <div className="circle"></div>
      <strong>HelpYours !</strong>
      <div className="organization-form mt-5 d-flex flex-column justify-content-start p-3">
        <strong className="mb-4" style={{ fontSize: "24px" }}>
          Contact Details
        </strong>
        <form>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organization-name"
              className=""
              style={{ fontSize: "19px" }}
            >
              Contact no: 1{" "}
            </label>
            <input type="text" className="border-b container" />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organization-name"
              className=""
              style={{ fontSize: "19px" }}
            >
              Contact no: 2
            </label>
            <input type="text" className="border-b container" />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organization-name"
              className=""
              style={{ fontSize: "19px" }}
            >
              Toll Free Number{" "}
            </label>
            <input
              type="text"
              name="organization-name"
              className="border-b container"
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organization-name"
              className=""
              style={{ fontSize: "19px" }}
            >
             Address{" "}
            </label>
            <input
              type="text"
              name="organization-name"
              className="border-b container"
            />
            <button onClick={handleLocation}>use Current Location</button>
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organization-name"
              className=""
              style={{ fontSize: "19px" }}
            >
              Profile{" "}
            </label>
            <input
              type="file"
              name="organization-name"
              className="border-b container"
            />
          </div>
          <button className="container-fluid" style={{backgroundColor:"#26ABB4",padding:'5px',width:"100px",fontSize:"18px"}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;

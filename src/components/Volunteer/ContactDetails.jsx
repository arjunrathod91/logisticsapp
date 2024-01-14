import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import axios from "axios";

const ContactDetails = () => {
  const { setContact1, setContact2, setTollFreeNumber, setAddress } = useContext(MyContext)
  const nevigate = useNavigate()

  const handleSubmit = () => {
    nevigate('/volvarify')
  }

  return (
    <>
      <div className="d-flex container-fluid vh-100 flex-column justify-content-center align-items-center">
        <div className="circle"></div>
        <strong>HelpYours !</strong>
        <div className="organization-form mt-5 d-flex flex-column justify-content-start p-3">
          <strong className="mb-4" style={{ fontSize: "24px" }}>
            Contact Details
          </strong>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column mb-2">
              <label
                htmlFor="contact1"
                className=""
                style={{ fontSize: "19px" }}
              >
                Contact no: 1
              </label>
              <input type="text"
                className="border-b container"
                name="contact1"
                onChange={(e) => setContact1(e.target.value)}
              />
              <div className="d-flex flex-column mb-2">
                <label
                  htmlFor="contact2"
                  style={{ fontSize: "19px" }}
                >
                  Contact no: 2
                </label>
                <input type="text" className="border-b container" name="contact2"
                  onChange={(e) => setContact2(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column mb-2">
                <label
                  htmlFor="tollFreeNumber"
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
              <div className="d-flex flex-column mb-2">
                <label
                  htmlFor="address"
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
              <button>use Current Location</button>
            </div>
            <button type="submit" className="container-fluid" style={{ backgroundColor: "#26ABB4", padding: '5px', width: "100px", fontSize: "18px" }}>Submit</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;

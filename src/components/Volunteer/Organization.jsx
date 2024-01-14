import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";
import { FormSelect } from "react-bootstrap";

const Organization = () => {

  const nevigate = useNavigate()

  const { setOrganizationName, setOrganizationHead, setArea, setAboutOrganization, setNumberOfWorkers, setExperience, setLicence } = useContext(MyContext)

  const handleSubmit = () => {
    nevigate('/volcontact')

  }
  return (
    <div className="d-flex container-fluid vh-100 flex-column justify-content-center align-items-center">
      <div className="circle"></div>
      <strong>HelpYours !</strong>
      <div className="organization-form mt-5 d-flex flex-column justify-content-start p-3">
        <strong className="mb-4" style={{ fontSize: "24px" }}>
          Organization Details
        </strong>
        <form action="#">
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organizationName"
              className=""
              style={{ fontSize: "19px" }}
            >
              Organization Name{" "}
            </label>
            <input
              type="text"
              className="border-b container"
              name="organizationName"
              onChange={(e) => setOrganizationName(e.target.value)} />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="area"
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
              htmlFor="aboutOrganiztion"
              style={{ fontSize: "19px" }}
            >
              About Organization{" "}
            </label>
            <textarea
              name="aboutOrganization"
              rows={5}
              className="border-b container"
              onChange={(e) => setAboutOrganization(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organizationHead"
              style={{ fontSize: "19px" }}
            >
              Organization Head{" "}
            </label>
            <input
              type="text"
              name="organizationHead"
              className="border-b container"
              onChange={(e) => setOrganizationHead(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="numberOfWorkers"
              style={{ fontSize: "19px" }}
            >
              Number of Workers{" "}
            </label>
            <input
              type="text"
              name="numberOfWorkers"
              className="border-b container"
              onChange={(e) => setNumberOfWorkers(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="experience"
              style={{ fontSize: "19px" }}
            >
              Experiance{" "}
            </label>
            <input
              type="text"
              name="experience"
              className="border-b container"
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="licence"
              style={{ fontSize: "19px" }}
            >
              Licence Id{" "}
            </label>
            <input
              type="text"
              name="licence"
              className="border-b container"
              onChange={(e) => setLicence(e.target.value)}
            />
          </div>
          <Link to="/volcontact"><button type="" placeholder="Submit" className="container-fluid mt-3"><FontAwesomeIcon icon={faCircleArrowRight} size="2x" style={{ color: '#26ABB4' }} /></button></Link>
        </form>
      </div>
    </div>
  );
};

export default Organization;

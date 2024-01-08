import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AllContext";

const Organization = () => {

  const nevigate = useNavigate()

  const {setOrganizationName,setOrganizationHead,setWhatYouProvide,setAboutOrganization,setNumberOfWorkers,setExperience,setLicence} = useContext(MyContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    nevigate('/volcontact')

  }
  return (
    <div className="d-flex container  vh-100 flex-column justify-content-center align-items-center">
      <div className="circle"></div>
      <strong>HelpYours !</strong>
      <div className="organization-form mt-3 d-flex flex-column justify-content-start p-3">
        <strong className="mb-3" style={{ fontSize: "24px" }}>
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
              htmlFor="whatYouProvide"
              className=""
              style={{ fontSize: "19px" }}
            >
              What You Provide
            </label>
            <input 
            type="text" 
            className="border-b container" 
            name="whatYouProvide"
            onChange={(e) => setWhatYouProvide(e.target.value)} />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="aboutOrganiztion"
              className=""
              style={{ fontSize: "19px" }}
            >
              About Organization{" "}
            </label>
            <input
              type="text"
              name="aboutOrganization"
              className="border-b container"
              onChange={(e) => setAboutOrganization(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label
              htmlFor="organizationHead"
              className=""
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
              className=""
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
              className=""
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
              className=""
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
          <div className="row">
            <div className="d-flex flex-column  col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Organization Name{" "}
              </label>
              <input type="text" className="border-b container " />
            </div>
            <div className="d-flex flex-column col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Area Of Organization
              </label>
              <input type="text" className="border-b container" />
            </div>
            <div className="d-flex flex-column col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                About Organization{" "}
              </label>
              <input
                type="text"
                name="organization-name"
                className="border-b container"
              />
            </div>
            <div className="d-flex flex-column col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Organization Head{" "}
              </label>
              <input
                type="text"
                name="organization-name"
                className="border-b container"
              />
            </div>
            <div className="d-flex flex-column col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Number of Workers{" "}
              </label>
              <input
                type="text"
                name="organization-name"
                className="border-b container"
              />
            </div>
            <div className="d-flex flex-column col-12 mb-2">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Experiance{" "}
              </label>
              <input
                type="text"
                name="organization-name"
                className="border-b container"
              />
            </div>
            <div className="d-flex flex-column col-12 ">
              <label
                htmlFor="organization-name"
                className=""
                style={{ fontSize: "19px" }}
              >
                Licence Id{" "}
              </label>
              <input
                type="text"
                name="organization-name"
                className="border-b container"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-3">
              <Link to="/volcontact">
                <button
                  type=""
                  placeholder="Submit"
                  className="container-fluid mt-3"
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    size="2x"
                    style={{ color: "#26ABB4" }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Organization;

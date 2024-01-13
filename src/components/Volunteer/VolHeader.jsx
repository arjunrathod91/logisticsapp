import React, { useContext, useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
  faEnvelope,
  faExclamationCircle,
  faBell,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../Contexts/AllContext";
import VolFooter from "./VolFooter";

const VolHeader = (props) => {
  const [notification, setNotification] = useState(false)
  const { voldata, setVolData } = useContext(MyContext)
  return (
    <div className="pt-3">
      <div className="d-flex justify-content-around">
        <div
          className="circle "
          style={{ width: "50px", height: "50px" }}
        ></div>
        <div>
          <h4 className='fw-bold'>HelpYours!</h4>
        </div>
        <div onClick={()=>setNotification(!notification)}>
          <FontAwesomeIcon
            icon={faBell}
            className="text-dark"
            style={{ width: "25px",
              height: "22.222px",
              flexShrink: "0" }}
          />
        </div>
      </div>
      <div className={notification ? 'w-[400px] p-2' : 'd-none'} style={{ position: 'absolute', top: '1%', right: '1%', borderRadius: '10px', backgroundColor: 'white' }}>
        <div onClick={() => setNotification(!notification)}><FontAwesomeIcon icon={faXmark} /></div>
        <p>Your Recent Request :</p>
        <p>You have 0 request</p>
      </div>
      <VolFooter/>
    </div>
  );
};

export default VolHeader;

import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/home",
    icon: faHome,
  },
  {
    route: "/search",
    icon: faExclamationCircle,
  },

  {
    route: "/login",
    icon: faEnvelope,
  },
  {
    route: "/login",
    icon: faUserCircle,
  },
];

const Header = (props) => {
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
        <div>
          <FontAwesomeIcon
            icon={faBell}
            className="text-dark"
            style={{ fontSize: "1.5rem" }}
          />
        </div>
      </div>

      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon
                      size="lg"
                      icon={tab.icon}
                      style={{ color: "black" }}
                    />
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Header;

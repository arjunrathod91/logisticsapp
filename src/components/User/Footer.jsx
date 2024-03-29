import React from 'react'
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
    {
      route: "/userpage",
      icon: faHome,
    },
    {
      route: "/userprofile",
      icon: faUserCircle,
    },
  ];
function Footer() {
  return (
    <div><nav
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
  </nav></div>
  )
}

export default Footer

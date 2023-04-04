import React from "react";
import "./navbar.css";
import { appConstants } from "../../constants/appConstants";
import ieee_logo from "../../assets/IEEE.png";
import mits_logo from "../../assets/mitsLogo.jpeg";
import Typography from "@mui/material/Typography";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const pathname = useLocation();
  console.log(pathname, "fwfw");
  const upperNavItemsList = [
    {
      name: "Home",
      path: `${appConstants.HOME}`,
      className: "upperNavItems",
    },
    {
      name: "Venue",
      path: `${appConstants.VENUE}`,
      className: "upperNavItems",
    },
    {
      name: "Important Dates",
      path: `${appConstants.IMPORTANT_DATES}`,
      className: "upperNavItems",
    },
    {
      name: "Committee",
      path: `${appConstants.ORGANIZING_COMMITTEE}`,
      className: "upperNavItems",
    },
  ];

  const lowerNavItemsList = [
    {
      name: "Submission",
      path: `${appConstants.SUBMISSION}`,
      className: "lowerNavItems",
    },
    {
      name: "Call For Paper",
      path: `${appConstants.CALL_FOR_PAPER}`,
      className: "lowerNavItems",
    },

    {
      name: "Registration",
      path: `${appConstants.REGISTRATION}`,
      className: "lowerNavItems",
    },
  ];

  const handleMenuIcon = () => {
    document.querySelector(".lowerNavbar")?.classList.toggle("open");
    document.querySelector(".navbar")?.classList.toggle("open");
    document.querySelector(".upperNavbar")?.classList.toggle("open");
    document.querySelector(".container").classList.toggle("change");
  };

  return (
    <div className="navbar" id="navbar">
      <div className="upperNavbar" id="upperNavbar">
        <div>
          <img className="mits_logo" src={mits_logo} />
        </div>
        {/* <img className='ieee_logo' src={ieee_logo} /> */}
        <label className="titleText">ICAST' 23</label>
        <div>
          <div className="upperNavItemsList">
            {upperNavItemsList.map((navItem, index) => (
              <NavLink
                to={navItem.path}
                key={index}
                className={
                  pathname.pathname === navItem.path
                    ? "upperNavItems_active"
                    : "upperNavItems"
                }
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
          <div className="container" id="container" onClick={handleMenuIcon}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="lowerNavbar" id="lowerNavbar">
        <div className="dume"></div>
        <label className="collegeTitle">
          Madanapalle Institute of Technology & Science
        </label>
        <div className="lowerNavItemsList" id="lowerNavItemsList">
          {lowerNavItemsList.map((navItem, index) => (
            <NavLink
              to={navItem.path}
              key={index}
              className={
                pathname.pathname === navItem.path
                  ? "lowerNavItems_active"
                  : "lowerNavItems"
              }
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

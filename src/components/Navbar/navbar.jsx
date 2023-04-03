import React from 'react'
import './navbar.css'
import { appConstants } from '../../constants/appConstants'
import ieee_logo from '../../assets/IEEE.png'
import mits_logo from '../../assets/mitsLogo.jpeg'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const upperNavItemsList = [
        {
            name: "Home",
            path: `${appConstants.HOME}`,
            className: "upperNavItems",
        },
        {
            name : "Venue",
            path : `${appConstants.VENUE}`,
            className : "upperNavItems"
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
            name : "Submission",
            path : `${appConstants.SUBMISSION}`,
            className : "lowerNavItems"
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
    ]



  return (
    <div className='navbar'>
        <div className='upperNavbar'>
            <div>
                <img className='mits_logo' src={mits_logo} />
            </div>
            {/* <img className='ieee_logo' src={ieee_logo} /> */}
            <label 
                className='titleText'
            >
                ICAST' 23
            </label>
            <div>
                <div className='upperNavItemsList'>
                    {
                        upperNavItemsList.map((navItem, index) => (
                            <Link
                                to={navItem.path}
                                key={index}
                                className={navItem.className}
                            >
                                {navItem.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='lowerNavbar'>
            <div className='lowerNavItemsList'>
            {
                    lowerNavItemsList.map((navItem, index) => (
                        <Link
                            to={navItem.path}
                            key={index}
                            className={navItem.className}
                        >
                            {navItem.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

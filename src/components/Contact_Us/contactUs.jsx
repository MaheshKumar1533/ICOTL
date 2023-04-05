import React from 'react'
import { appConstants } from '../../constants/appConstants'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import './contactUs.css'

export default function ContactUs() {
  const handleContactUs = () => {
      document.getElementById("contactUsBody")?.classList.toggle('active');
  }
  return (
    <div>
      <div className="contactUs">
        <Button
          to={appConstants.CONTACT_US}
          className="contactUsBtn"
          onClick={handleContactUs}
        >
          Contact Us
        </Button>
      </div>
      <div className="contactUsBody" id="contactUsBody">
        <div className="contactUsDetails">
          <label className='contactUsName'>Dr R Nidhya</label>
          <label>Professor, CSE</label>
          <span>
            Madanapalle Institute of Technology & Science <br /> Madanapalle, AP
            India,
          </span>
            {/* <div style={{ display: "flex", alignItems: "center", gap: 10 ,marginTop:20,marginBottom:5}}>
              <PhoneIcon />
              <span>9894780297</span>
            </div> */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <EmailIcon />
              <span>icotl23@mits.ac.in</span>
            </div>
        </div>
      </div>
    </div>
  );
}

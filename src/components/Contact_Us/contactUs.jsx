import React from 'react'
import { appConstants } from '../../constants/appConstants'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './contactUs.css'

export default function ContactUs() {
  return (
    
          <Link
            to={appConstants.CONTACT_US}
            className='contactUs'
          >
            Contact Us
          </Link>
  )
}

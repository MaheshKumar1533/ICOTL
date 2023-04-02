import React from 'react'
import './navbar.css'
import ieee_logo from '../../assets/IEEE_2.png'
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <div className='navbar'>
        {/* Navbar */}
        <div className='upperNavbar'>
            <img className='logo' src={ieee_logo} typeof='png' />
            <Typography 
                variant='h3'
                className='title'
            >
                ICAST' 23
            </Typography>
        </div>
    </div>
  )
}

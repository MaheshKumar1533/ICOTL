import React from 'react'
import PageNote from '../pageNote.jsx/pageNote'
import './access.css'

export default function Access() {
  return (
    <div className='access'>
      <iframe
        className="gmap_iframe"
        title='MITS Location'
        width="auto"
        height="400px"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1343.0335208997412!2d78.47867499236482!3d13.630436778668816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2677c83886ad7%3A0xad73159e2bddda33!2sMadanapalle%20institute%20of%20technology%20and%20Sciences!5e1!3m2!1sen!2sin!4v1751964909769!5m2!1sen!2sin"
      ></iframe>
      <h1>Travel</h1>
      <p>There is a different access method depending on where you arrive.</p>
      <h2>Kempegowda International Airport Bengaluru</h2>
      <p>By Cab</p>
      <p>Kempegowda International Airport to MITS, Angallu</p>
      <p>123 km (3hr Journey)</p>
      <h2>Madanapalle Road Railway station</h2>
      <p>By Cab</p>
      <p>Madanapalle Road Railway station to MITS, Angallu</p>
      <p>9.5 km (25min Journey)</p>
    </div>
  )
}

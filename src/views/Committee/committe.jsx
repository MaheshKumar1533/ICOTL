import React from 'react'
import { Typography } from '@mui/material'
import './committee.css'
import { members } from './members'


export default function Committe() {
  return (
    <div className='committee' >
    {
      members.map((member, index) => (
        <div className='committeCard' key={index}>
          <Typography
            variant='h5'
            className='designation'
          >
            {member.designation}
          </Typography>
          <div className='personDetails'>
            <div>
              <Typography
                variant='h6'
                className='personName'
              >
                {member.name}
              </Typography>
              <Typography
                variant='p'
                className='profession'
              >
                {member.address}
              </Typography>
            </div>
          </div>
      </div>
      ))
    }
    </div>
  )
}

// Goutam Chakraborty
// Iwate Prefectural University, Japan D. Nidhya, MITS, India,  Masafumi MatsuHara, IPU, Japan

// Rung-Ching Chen
// Chaoyang University of Technology, Taiwan

import React from 'react'
import { Typography } from '@mui/material'
import './committee.css'

export default function Committe() {
  return (
    <div className='committee' >
      <div className='committeCard'>
        <Typography
          variant='h5'
          className='designation'
        >
          General Chair
        </Typography>
        <div className='personDetails'>
          <div>
            <Typography
              variant='h6'
              className='personName'
            >
              Goutam Chakraborty
            </Typography>
            <Typography
              variant='p'
              className='profession'
            >
              MITS, India
            </Typography>
          </div>
        </div>
      </div>

      <div className='committeCard'>
        <Typography
          variant='h5'
          className='designation'
        >
          Technical Program Chairs
        </Typography>
        <div className='personDetails'>
          <div>
            <Typography
              variant='h6'
              className='personName'
            >
              D. Nidhya
            </Typography>
            <Typography
              variant='p'
              className='profession'
            >
              MITS, India
            </Typography>
          </div>
          <div>
            <Typography
              variant='h6'
              className='personName'
            >
              Masafumi MatsuHara
            </Typography>
            <Typography
              variant='p'
              className='profession'
            >
              IPU, Japan  
            </Typography>
          </div>
        </div>

      </div>
    </div>
  )
}

// Goutam Chakraborty
// Iwate Prefectural University, Japan D. Nidhya, MITS, India,  Masafumi MatsuHara, IPU, Japan

// Rung-Ching Chen
// Chaoyang University of Technology, Taiwan

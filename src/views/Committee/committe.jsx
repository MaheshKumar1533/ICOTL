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
          Honorary Chair
        </Typography>
        <Typography
          variant='h6'
          className='personName'
        >
          Prof. Goutam Chakraborty
        </Typography>
        <Typography
          variant='p'
          className='profession'
        >
          Iwate Prefectural University, Japan
        </Typography>
      </div>
    </div>
  )
}

// Goutam Chakraborty
// Iwate Prefectural University, Japan

// Rung-Ching Chen
// Chaoyang University of Technology, Taiwan

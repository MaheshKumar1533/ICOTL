import React from 'react'
import { Typography } from '@mui/material'
import underConstruction from '../../assets/underConstruction.png'
import './pageNote.css'

export default function PageNote(props) {
  return (
    // <div className='PageNote'>
    //     <Typography
    //         variant='h5'
    //     >
    //        {props.note}
    //     </Typography>
        <img className="constructionBgImg" src={underConstruction} />
  )
}

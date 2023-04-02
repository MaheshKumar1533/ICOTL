import React from 'react'
import './home.css'
import homeBgImg from '../../assets/conf_img.png'

export default function Home() {
  return (
    <div className='homeDiv'>
      <div className='BgImgDiv'>
        <img className='homeBgImg' src={homeBgImg} />
      </div>
      Home
    </div>
  )
}

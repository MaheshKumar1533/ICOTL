import React from 'react'
import './home.css'
import homeBgImg from '../../assets/conf_img.png'

export default function Home() {
  return (
    <div className='homeDiv'>
      <div className='BgImgDiv'>
        <img className='homeBgImg' src={homeBgImg} />
      </div>
      <div class="typewriter">
        <h1 className='line_1'>The 10th </h1>
        <h1 className='line_2'>IEEE International Conference</h1>
        <h1 className='line_3'> on </h1>
        <h1 className='line_4'>Awareness Science and Technology.</h1>
          
      </div>
      Home
    </div>
  )
}

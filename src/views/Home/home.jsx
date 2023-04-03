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
        <h1 className='line_1'>The 1st</h1>
        <h1 className='line_2'>International Conference</h1>
        <h1 className='line_3'> on </h1>
        <h1 className='line_4'>Optimization Techniques for Learning.</h1>
        <h1 className='line_4'>(ICOTL 2023)</h1>
          
      </div>
      Home
    </div>
  )
}


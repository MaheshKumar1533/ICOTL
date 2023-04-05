import React from 'react'
import './importantDates.css'

export default function ImportantDates() {
  return (
    <div className='impDates'>
      <h3 className='impDatesTitle'>START</h3>
      <div className='timeLine'>
        <div className='pointOfTime pointOfTime1'>
          <div className='upTimebar' />
        </div>
        <div className='pointOfTime pointOfTime2'>
          <div className='downTimebar' />
        </div>
        <div className='pointOfTime pointOfTime3'>
          <div className='upTimebar' />
        </div>
        <div className='pointOfTime pointOfTime4'>
          <div className='downTimebar' />
        </div>
      </div>
      <div className='date date1'>
        <h3 className=''>Manuscript Submission</h3>  
        <h3 className=''>30<sup>th</sup> July 2023</h3>
      </div>
      <div className='date date2'>
        <h3 className=''>Acceptance Notification</h3>  
        <h3 className=''>30<sup>th</sup> August 2023</h3>
      </div>
      <div className='date date3'>
        <h3 className=''>Camera Ready Submission</h3>  
        <h3 className=''>15<sup>th</sup> October 2023</h3>
      </div>
      <div className='date date4'>
        <h3 className=''>Advance Registration</h3>  
        <h3 className=''>15<sup>th</sup> October 2023</h3>
      </div>
      {/* <h3 className='date1'>Manuscript Submission</h3>
      <h3 className='date2'>Acceptance Notification</h3>
      <h3 className='date3'>Camera Ready Submission</h3>
      <h3 className='date4'>Advance Registration</h3>
      <h3 className='date5'>30<sup>th</sup> July 2023</h3>
      <h3 className='date6'>30<sup>th</sup> August 2023</h3>
      <h3 className='date7'>15<sup>th</sup> October 2023</h3>
      <h3 className='date8'>15<sup>th</sup> October 2023</h3> */}
    </div>
  )
}

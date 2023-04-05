import React from 'react'
import './importantDates.css'

export default function ImportantDates() {
  return (
    <div className='impDates'>
      {/* <h3 className='impDatesTitle'>START</h3> */}
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
        <div className='pointOfTime pointOfTime5'>
          <div className='upTimebar' />
        </div>
      </div>

      <div className='date date1'>
        <h3 className=''>Start</h3>  
        <p>Author will be able to submit his/her paper.</p>
        <h3 className=''>1<sup>st</sup> May 2023</h3>
      </div>

      <div className='date date2'>
        <h3 className=''>Manuscript Submission</h3>  
        <h3 className=''>30<sup>th</sup> July 2023</h3>
      </div>

      <div className='date date3'>
        <h3 className=''>Acceptance Notification</h3>  
        <h3 className=''>30<sup>th</sup> August 2023</h3>
      </div>

      <div className='date date4'>
        <h3 className=''>Camera Ready Submission & </h3>  
        <h3 className=''>Earlybird Registration</h3>  
        <h3 className=''>15<sup>th</sup> October 2023</h3>
      </div>

      <div className='date date5'>
        <h3 className=''>Date of Conference </h3>  
        <h3 className=''>7<sup>th</sup> - 8<sup>th</sup> October 2023</h3>
      </div>
      
    </div>
  )
}

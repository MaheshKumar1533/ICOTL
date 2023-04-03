import React from 'react'
import './importantDates.css'

export default function ImportantDates() {
  return (
    <div className='impDates'>
      <h2 className='impDatesTitle'>Timeline</h2>
      <div className='timeLine'>
        <div className='pointOfTime'>
          <div className='rightTimebar'>
          </div>
        </div>
        <div className='pointOfTime'>
          <div className='leftTimebar'>

          </div>
        </div>
        <div className='pointOfTime'>
          <div className='rightTimebar'>

          </div>
        </div>
        <div className='pointOfTime'>
          <div className='leftTimebar'>
            
          </div>
        </div>
      </div>
      <h3 className='date1'>Manuscript Submission</h3>
      <h3 className='date2'>Acceptance Notification</h3>
      <h3 className='date3'>Camera Ready Submission</h3>
      <h3 className='date4'>Advance Registration</h3>
      <h3 className='date5'>30<sup>th</sup> July 2023</h3>
      <h3 className='date6'>30<sup>th</sup> August 2023</h3>
      <h3 className='date7'>15<sup>th</sup> October 2023</h3>
      <h3 className='date8'>15<sup>th</sup> October 2023</h3>
    </div>
  )
}

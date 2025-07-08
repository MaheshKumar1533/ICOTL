import React from 'react'
import Marquee from "react-fast-marquee";
import './marquee.css'

const Information = [
  "Last Date for Paper Submission is yet to be announced",
]

const MarqueeText = () => {
  return (
    <div className="marqueeDiv">
      <Marquee pauseOnHover={true} speed={40}>
        {Information.map((info, index) => (
          <div className="marqueeList">
            <p key={index}>{info}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;
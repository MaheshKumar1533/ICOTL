import React from "react";
import venueBg from "./../../assets/venueBg.jpg";
import "./venue.css";

export default function Venue() {
  return (
    <div>
      <div className="venueDetailsDiv">
        <div className="BgImgDiv">
          <img className="venueBgImg" src={venueBg} />
          <div className="venueDetailsBody">
            <div>
              <p className="venueHeader">
                In Person | Banglore | December 2023
              </p>
              <p className="venueTitle">Top View Conference Hall</p>
              <span>
                No. 350, 1st Stage, 12th Cross, Off Double Road, Opp To Value
                Mart, Indiranagar Dine-in
              </span>
              <div>
                <div className="venueMap">
                  <iframe
                    className="gmap_iframe"
                    width="auto"
                    height="400px"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680502900281!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import venueBg from "./../../assets/venueBg.jpg";
import "./venue.css";

export default function Venue() {
  return (
    <div>
      <div className="venueDetailsDiv">
        <div className="VenueBgImgDiv">
          <img className="venueBgImg" src={venueBg} />
          <div className="venueDetailsBody">
            <div>
              <p className="venueHeader">
                In Person | Madanapalle | 6<sup>th </sup>- 7<sup>th</sup> March, 2026
              </p>
              <p className="venueTitle">
              Madanapalle Institute of Technology & Science</p>
              <span>
Post Box No: 14, Kadiri Road
Angallu (V), Madanapalle-517325
Annamayya District, Andhra Pradesh, India
              </span>
              <div>
                <div className="venueMap">
                  <iframe
                    className="gmap_iframe"
                    width="auto"
                    height="400px"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1343.0335208997412!2d78.47867499236482!3d13.630436778668816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2677c83886ad7%3A0xad73159e2bddda33!2sMadanapalle%20institute%20of%20technology%20and%20Sciences!5e1!3m2!1sen!2sin!4v1751964909769!5m2!1sen!2sin"
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

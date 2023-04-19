import React from 'react'
import './home.css'
import mitsImg from '../../assets/mits_img_2.jpg'
import homeBgImg from '../../assets/conf_img.png'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <div className="homeDiv">
      <div class="HomeBgImgDiv">
        <img src={mitsImg} alt="Nature" className='homeImg' />
        <div class="text-block">
          <p className="line_1">The First <span className='mainLetter'>I</span>nternational <span className='mainLetter'>C</span>onference</p>

          <p className="line_2"> on </p>

          <p className="line_3"><span className='mainLetter'>O</span>ptimization <span className='mainLetter'>T</span>echniques for <span className='mainLetter'>L</span>earning.</p>
          
          <p className="line_4">(ICOTL 2023)</p>
        </div>
      </div>
      <div className='HomePageCard'>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "20px auto",
            backgroundColor: " #bce6fa",
          }}
        >
          <CardContent>
            <p className="cardTitle">About Conference</p>
            <div className="cardText">
              The 1st International Conference on Optimization Techniques for
              Learning (ICOTL 2023) is a major international conference to bring
              together researchers, engineers, and scientists from academia and
              industry working in Machine Learning and Data Science and their
              applications in different scientific, technical, and social
              optimization problems. Researchers will meet for discussion,
              exchanging ideas, opinions, and most importantly to present their
              latest works and research results. Special sessions on various
              subjects related to artificial intelligence, soft-computing,
              intelligent systems, perception, cognitive science, psychology,
              data analysis, IoT are welcome.
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "20px auto",
            backgroundColor: " #bce6fa",
          }}
        >
          <CardContent>
            <p className="cardTitle">About MITS</p>
            <div className="cardText">
              Madanapalle Institute of Technology & Science is established in
              1998 in the picturesque and pleasant environs of Madanapalle and
              is ideally located on a sprawling 26.17 acre campus on Madanapalle
              - Anantapur Highway (NH-205) near Angallu, about 10km away from
              Madanapalle. MITS originated under the auspices of Ratakonda Ranga
              Reddy Educational Academy under the proactive leadership of Late
              Sri. N. Krishna Kumar M.S. (U.S.A), the then President and Dr. N.
              Vijaya Bhaskar Choudary, Ph.D., Secretary & Correspondent of the
              Academy. MITS is governed by a progressive management that never
              rests on laurels and has been striving conscientiously to develop
              it as one of the best centers of Academic Excellence in India. The
              Institution's profile is firmly based on strategies and action
              plans that match changing demands of the nation and the students
              fraternity. MITS enjoys constant support and patronage of NRI's
              with distinguished academic traditions and vast experience in
              Engineering & Technology.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


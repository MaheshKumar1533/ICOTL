import React, { useEffect, useState } from "react";
import FlipDown from "flipdown";
import "./countDown.css";
import FlipCountdown from "@rumess/react-flip-countdown";
import { setRef } from "@material-ui/core";

// const CountDown = () => {

//     const deadline = "December, 7, 2023";
//     const [days, setDays] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);

//     const leading0 = (num) => {
//       return num < 10 ? "0" + num : num;
//     };

//     const getTimeUntil = (deadline) => {
//       const time = Date.parse(deadline) - Date.parse(new Date());
//       if (time < 0) {
//         setDays(0);
//         setHours(0);
//         setMinutes(0);
//         setSeconds(0);
//       } else {
//         setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//         setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//         setMinutes(Math.floor((time / 1000 / 60) % 60));
//         setSeconds(Math.floor((time / 1000) % 60));
//       }
//     };

//     useEffect(() => {
//       setInterval(() => getTimeUntil(deadline), 1000);

//       return () => getTimeUntil(deadline);
//     }, [deadline]);

//    return (
//      <div className="countDownDiv">
//        <div className="Clock">
//            <label>{leading0(days)} Days</label> <span>:</span>
//        </div>
//        <div className="Clock">
//            <label>{leading0(hours)} Hours</label> <span>:</span>
//        </div>
//        <div className="Clock">
//            <label>{leading0(minutes)} Min</label> <span>:</span>
//        </div>
//        <div className="Clock">
//            <label>{leading0(seconds)} Sec</label>
//        </div>
//      </div>
//    );
// };

const CountDown = () => {
  const countToDate = new Date("December 06, 2023 23:59:59");
  let previousTimeBetweenDates;

  setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    console.log(currentDate, "  ", countToDate, " == ", timeBetweenDates);
    flipAllCards(timeBetweenDates);

    previousTimeBetweenDates = timeBetweenDates;
  }, 250);

  function flipAllCards(time) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);

    flip(
      document.querySelector("[data-days-hundreds]"),
      Math.floor(days / 100)
    );
    flip(
      document.querySelector("[data-days-tens]"),
      Math.floor(days / 10) % 10
    );
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
      document.querySelector("[data-minutes-tens]"),
      Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
      document.querySelector("[data-seconds-tens]"),
      Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  }

  function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  }
  return (
    <div class="timer">
      <div class="timer-segment">
        <div class="segment-title">Days</div>
        <div class="segment">
          <div class="flip-card" data-days-hundreds>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-days-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-days-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="timer-segment">
        <div class="segment-title">Hours</div>
        <div class="segment">
          <div class="flip-card" data-hours-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-hours-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="timer-segment">
        <div class="segment-title">Minutes</div>
        <div class="segment">
          <div class="flip-card" data-minutes-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-minutes-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="timer-segment">
        <div class="segment-title">Seconds</div>
        <div class="segment">
          <div class="flip-card" data-seconds-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-seconds-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const CountDown = () => {
//   return (
//     <div className="timer">
//       <h1>FlipDown Timer</h1>

//     </div>
//   );
// };

export default CountDown;

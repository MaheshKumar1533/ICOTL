import React, { useEffect, useState } from "react";
import "./countDown.css";
import FlipCountdown from "@rumess/react-flip-countdown";
import { setRef } from "@mui/material";

const CountDown = () => {
	const countToDate = new Date("March 05, 2026 23:59:59");
	let previousTimeBetweenDates;

	useEffect(() => {
		const interval = setInterval(() => {
			const currentDate = new Date();
			const timeBetweenDates = Math.ceil(
				(countToDate - currentDate) / 1000
			);
			flipAllCards(timeBetweenDates);
			previousTimeBetweenDates = timeBetweenDates;
		}, 250);

		return () => clearInterval(interval);
	}, []);

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
		flip(
			document.querySelector("[data-hours-tens]"),
			Math.floor(hours / 10)
		);
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

export default CountDown;

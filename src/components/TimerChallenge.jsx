import { useState, useRef } from "react";

const TimerChallenge = ({ title, targeTime }) => {
	const timer = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	const handleStart = () => {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targeTime * 1000);

		setTimerStarted(true);
	};

	const handleStop = () => {
		clearTimeout(timer.current);
		// setTimerStarted(false);
	};

	return (
		<section className="challenge">
			<h2> {title}</h2>
			{timerExpired && <p>You Lost!</p>}
			<p className="challenge-time">
				{targeTime} second{targeTime > 1 ? "s" : ""}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>
					{timerStarted ? "Stop" : "Start"} Challange
				</button>
			</p>
			<p className={timerStarted ? "active" : undefined}>
				{timerStarted ? "Time is running..." : "Timer inactive"}
			</p>
		</section>
	);
};

export default TimerChallenge;

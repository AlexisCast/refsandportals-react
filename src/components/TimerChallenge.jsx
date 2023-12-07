import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targeTime }) => {
	const timer = useRef();
	const dialog = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	const handleStart = () => {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current.showModal();
		}, targeTime * 1000);

		setTimerStarted(true);
	};

	const handleStop = () => {
		clearTimeout(timer.current);
		// setTimerStarted(false);
	};

	return (
		<>
			<ResultModal ref={dialog} result="lost" targetTime={targeTime} />
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
		</>
	);
};

export default TimerChallenge;

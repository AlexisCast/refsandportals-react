const TimerChallenge = ({ title, targeTime }) => {
	return (
		<section className="challenge">
			<h2> {title}</h2>
			<p className="challenge-time">
				{targeTime} second{targeTime > 1 ? "s" : ""}
			</p>
			<p>
				<button>Start Challange</button>
			</p>
			<p className="">Time is running... / Timer inactive</p>
		</section>
	);
};

export default TimerChallenge;

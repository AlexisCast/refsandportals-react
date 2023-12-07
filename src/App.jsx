import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Easy" targeTime={1} />
				<TimerChallenge title="Not Easy" targeTime={5} />
				<TimerChallenge title="Getting Tough" targeTime={10} />
				<TimerChallenge title="Pros Only" targeTime={15} />
			</div>
		</>
	);
}

export default App;

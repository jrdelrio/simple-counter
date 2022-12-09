import React, { useState }  from "react";

//create your first component
const Home = () => {

	let [secondsUni, setSecondsUni] = useState(0);
	let [secondsDec, setSecondsDec] = useState(0);
	let [minutesUni, setMinutesUni] = useState(0);
	let [minutesDec, setMinutesDec] = useState(0);
	let [hoursUni, setHoursUni] = useState(0);
	let [hoursDec, setHoursDec] = useState(0);

	const change = () => {
		setSecondsUni(secondsUni += 1);

		if(secondsUni === 10){
			setSecondsUni(secondsUni = 0);
			setSecondsDec(secondsDec += 1);
		};
	
		if(secondsDec === 6){
			setSecondsDec(secondsDec = 0);
			setSecondsUni(secondsUni = 0);
			setMinutesUni(minutesUni += 1);
		};
	
		if(minutesUni === 10){
			setMinutesUni(minutesUni = 0);
			setSecondsDec(secondsDec = 0);
			setSecondsUni(secondsUni = 0);
			setMinutesDec(minutesDec += 1);
		};
	
		if(minutesDec === 6){
			setMinutesDec(minutesDec = 0);
			setMinutesUni(minutesUni = 0);
			setSecondsDec(secondsDec = 0);
			setSecondsUni(secondsUni = 0);
			setHoursUni(hoursUni += 1);
		};
	
		if(hoursUni === 10){
			setHoursUni(hoursUni = 0);
			setMinutesDec(minutesDec = 0);
			setMinutesUni(minutesUni = 0);
			setSecondsDec(secondsDec = 0);
			setSecondsUni(secondsUni = 0);
			setHoursDec(hoursDec += 1);
		};
	
		if(hoursDec == 6){
			setHoursDec(hoursDec = 0);
			setHoursUni(hoursUni = 0);
			setMinutesDec(minutesDec = 0);
			setMinutesUni(minutesUni = 0);
			setSecondsDec(secondsDec = 0);
			setSecondsUni(secondsUni = 0);
		};


	}

	setInterval(change, 3000);

	return (
		<div className="wrapper">
			<div className="full-clock">
				<p className="digit"><span class="material-symbols-outlined">schedule</span></p>
				<p className="digit">{hoursDec}</p>
				<p className="digit">{hoursUni}</p>
				<p className="digit">{minutesDec}</p>
				<p className="digit">{minutesUni}</p>
				<p className="digit">{secondsDec}</p>
				<p className="digit">{secondsUni}</p>
					
			</div>
		</div>
	);
};

export default Home;


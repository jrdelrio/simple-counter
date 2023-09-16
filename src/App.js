import React, { useState }  from "react";

const App = () => {

  function toTimeString(totalSeconds) {
		const totalMs = totalSeconds * 1000;
		const result = new Date(totalMs).toISOString().slice(11, 19);
	  
		return result;
	};

	let [ sec, setSec ] = useState(0);
	setInterval(() => setSec(sec += 1), 1000);

  return (
    <div className="App">
      <div className="wrapper">
				<div className="full-clock">
					<span className="material-symbols-outlined icon">schedule</span>
					<p className="digit"> {toTimeString(sec)}</p>
				</div>
			</div>
    </div>
  );
}

export default App;



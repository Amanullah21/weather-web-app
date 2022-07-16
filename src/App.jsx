import React from "react";


function App() {
	let url ="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
	let response = await fetch(url);
	let json = await response.json();
	console.log(json)
	return (
		<div>hello</div>
	);
}

export default App;

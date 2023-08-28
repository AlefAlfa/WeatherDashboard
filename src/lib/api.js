

export function getLocation() {
	fetch(locationUrl)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(`HTTP error! Status ${res.status}`);
			}
		})
		.then((data) => {
			return {
				lat: data.lat,
				lon: data.lon
			};
		})
		.catch((error) => {
			console.error(error);
		});
}

export function getWeather() {
	fetch(weatherUrl)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(`HTTP error! Status ${res.status}`);
			}
		})
		.then((data) => {
			return {
				main: data.weather[0].main,
				description: data.weather[0].description
			};
		});
}

export function getWeatherByCity(cityUrl) {
	return fetch(cityUrl) // return the Promise here
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(`HTTP error! Status ${res.status}`);
			}
		})
		.then((data) => {
      console.log(data);
			return {
				main: data.weather[0].main,
				temp: Math.round(data.main.temp),
				tempMin: Math.round(data.main.temp_min),
				tempMax: Math.round(data.main.temp_max),
        name: data.name
			};
		})
		.catch((error) => {
			console.log(`Error! Status ${error}`);
      throw error
		});
}


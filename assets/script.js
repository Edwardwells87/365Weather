//need an array to store weather history data. use push or similar function to keep adding to and not changing the data itself

//api data for the lat and long
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '034d5daef9msh9747ed72ce10a84p1c0ee4jsn7e890345d211',
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
  }
};


//make a mega array for the history, not just an array for this one. 

//function that sends city name into lat and long through other api

let cityHistory = [];

function theClick() {
  var inputElement = document.getElementById('cityName');
  elemVal = inputElement.value;
  console.log(elemVal);
  stringElem = toString(elemVal);
  let latLongUrlArryApart = ['https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=', elemVal, '&accept-language=en&polygon_threshold=0.0'];
  let latLongUrlArry = latLongUrlArryApart.join();
  console.log(latLongUrlArry);
  fetch(latLongUrlArry, options)
    .then(response => response.json())
    .then(response => {
      console.log(response[0].lat);
      console.log(response[0].lon);
      const city = elemVal;
      const latitude = response[0].lat;
      const longitude = response[0].lon;
      
      const cityData = { city, latitude, longitude };
      cityHistory.push(cityData); 
      localStorage.setItem('cityHistory', JSON.stringify(cityHistory)); // Store cityHistory array in local storage
      console.log('Data stored in local storage for city: ' + city);
    })
    .catch(err => console.error(err));
}


api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//make const items that wont change
const timeCounter = document.getElementById('timee')

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
let replacement_symbol = "_";
let cityHistory = [];

function theClick() {
  var inputElement = document.getElementById('cityName');
  elemVal = inputElement.value;
  console.log(elemVal);
  stringElem = elemVal.toString();
  replacement_symbol = "%20";
  fixedInput = stringElem.replace(" ", replacement_symbol);
  console.log(fixedInput);
  let latLongUrlArryApart = ['https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=', encodeURIComponent(elemVal), '&accept-language=en&polygon_threshold=0.0'];
  let latLongUrlArry = latLongUrlArryApart.join('');
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
      localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
      console.log('Data stored in local storage for city: ' + city);
      const weatherApi = '9e237b550d1789a1ff717006257934f9';
      const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApi}`;
      console.log(weatherUrl);
      fetch(weatherUrl)
  .then(response => response.json())
  .then(myWeatherData => {
    localStorage.setItem("myWeatherData", JSON.stringify(myWeatherData)); // Update this line
    console.log(myWeatherData.list[0].main.temp);//path to current temp 
    console.log(myWeatherData.list[1].main.temp_min)//tomorrow's minimum
    console.log(myWeatherData)
  })
  .catch(error => console.error(error));

      pullWeatherData();
    })
    .catch(err => console.error(err));
}

//function that calls data to display on the page


let pressure = document.getElementById('pressure')
let humidity = document.getElementById('humidity')
let sunrise = document.getElementById('sunrise')
let sunset = document.getElementById('sunset')


// pull data from weather and use it to fill in these elements
// Assuming the weather data array is stored in a variable called 'cityHistoryPulled'
// and the elements in the webpage are accessed using the variables pressure, humidity, sunrise, and sunset

function pullWeatherData() {
  var cityWeatherPulled = JSON.parse(localStorage.getItem("myWeatherData"));
  console.log(cityWeatherPulled)
  
  
  

  if (cityWeatherPulled && cityWeatherPulled.list) {
  // Extract the relevant weather information from the weather data
  




  // Update the elements in the webpage with the extracted weather information
  

 
/// need to clean an refactor code so functions are smaller 

function populateWeatherData () {
  //declare all the variables now 
let todayTemp =  myWeatherData.list[0].main.temp ; 
let todaySymbl = myWeatherData.list[0].weather.icon; 
let todaysHumid = myWeatherData.list[0].main.humidity;
let todaysPres = myWeatherData.list[0].main.pressure;
let tomLow = myWeatherData.list[3].main.temp_min;   
let tomHi = myWeatherData.list[3].main.temp_max ;  
let tomSym = myWeatherData.list[3].weather.icon;
let thirdLow = myWeatherData.list[11].main.temp_min ;  
let thirdHi = myWeatherData.list[11].main.temp_max
let thirdSymbl = myWeatherData.list[11].weather.icon
let frthlw = myWeatherData.list[19].main.temp_min
let frthhi = myWeatherData.list[19].main.temp_max
let frthsym = myWeatherData.list[19].weather.icon
let fifthlow = myWeatherData.list[27].main.temp_min
let fifthhigh = myWeatherData.list[27].main.temp_max
let fifthsymb = myWeatherData.list[27].weather.icon

/// populate data 
document.getElementById("pressure").textContent = "Pressure: " + pressureValue + " hPa";
document.getElementById("humidity").textContent = "Humidity: " + humidityValue + "%";
document.getElementById('').textcontent = ' ';
}
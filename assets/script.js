
const timeCounter = document.getElementById('timee')
let resultsDisplay = document.getElementById('displayCont')
var cityElement = document.getElementById('cityName');
let replacement_symbol = "_";
let cityHistory = [];
let cityTitleEl = document.getElementById('cityTitle')
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '034d5daef9msh9747ed72ce10a84p1c0ee4jsn7e890345d211',
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
  }
};
//lets clean up the click function



function theClick() {
  event.preventDefault();
  elemVal = cityElement.value;
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
      const city = elemVal;
      console.log(elemVal)
      let capElemVal = elemVal.toUpperCase();
      
      cityTitleEl.innerText = capElemVal;
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
        
          console.log(myWeatherData)
          pullWeatherData()
         
        })
        .catch(error => console.error(error));

      
    })
    .catch(err => console.error(err));
  
}

let temp1 = document.getElementById('todaysTemp')
let todhumel = document.getElementById('humidity')
let todpressel = document.getElementById('pressure')
let templowtom = document.getElementById('lowtom')

let tomHiEl = document.getElementById('hitom')
let thirdHiEl = document.getElementById('turdhi')
let thirdLowEl = document.getElementById('turdlo')
let frthhiEl = document.getElementById('fourthhi')
let frthloEl = document.getElementById('fourthlo')
let fifthhighEl = document.getElementById('fifthi')
let fifthlowEl = document.getElementById('fifthlo')

//img elems
todImgel = document.getElementById('todImg')
tomImgel = document.getElementById('tomImg')
turdImgel = document.getElementById('turdImg')
frthImgEl = document.getElementById('frthImg')
fifthImgEl = document.getElementById('fifthImg')

function pullWeatherData() {
  var cityWeatherPulled = JSON.parse(localStorage.getItem("myWeatherData"));
  console.log(cityWeatherPulled)
  
    let todayTemp = cityWeatherPulled.list[0].main.temp;
temp1.innerHTML = todayTemp + ' °F';
    let todaySymbl = cityWeatherPulled.list[0].weather[0].icon;
    console.log(todaySymbl)
    todImg.src = `https://openweathermap.org/img/wn/${todaySymbl}@2x.png`
    let todaysHumid = cityWeatherPulled.list[0].main.humidity;
    todhumel.innerText = 'Humidity  ' + todaysHumid;
    let todaysPres = cityWeatherPulled.list[0].main.pressure;
todpressel.innerText = 'Pressure  ' + todaysPres;

    let tomLow = cityWeatherPulled.list[3].main.temp_min;
  templowtom.innerText = 'Low ' + tomLow + ' °F'
    let tomHi = cityWeatherPulled.list[3].main.temp_max;
    tomHiEl.innerText = 'High ' + tomHi + ' °F'
    let tomSym = cityWeatherPulled.list[3].weather[0].icon;
tomImgel.src = `https://openweathermap.org/img/wn/${tomSym}@2x.png`

    let thirdLow = cityWeatherPulled.list[11].main.temp_min;
    thirdLowEl.innerText = 'Low ' + tomLow + ' °F'
    let thirdHi = cityWeatherPulled.list[11].main.temp_max
    thirdHiEl.innerText = 'High ' + thirdHi + ' °F'
    let thirdSymbl = cityWeatherPulled.list[11].weather[0].icon
    turdImgel.src = `https://openweathermap.org/img/wn/${thirdSymbl}@2x.png`


    let frthlw = cityWeatherPulled.list[19].main.temp_min
    frthloEl.innerText = 'Low ' + frthlw + ' °F'
    let frthhi = cityWeatherPulled.list[19].main.temp_max
    frthhiEl.innerText = 'High ' + frthhi + ' °F'
    let frthsym = cityWeatherPulled.list[19].weather[0].icon
    frthImgEl.src = `https://openweathermap.org/img/wn/${frthsym}@2x.png`


    let fifthlow = cityWeatherPulled.list[27].main.temp_min
    fifthlowEl.innerText = 'Low ' + fifthlow + ' °F'
    let fifthhigh = cityWeatherPulled.list[27].main.temp_max
    fifthhighEl.innerText = 'High ' + fifthhigh + ' °F'
    let fifthsymb = cityWeatherPulled.list[27].weather[0].icon
    fifthImgEl.src = `https://openweathermap.org/img/wn/${fifthsymb}@2x.png`


   
  }

  //figure out symbols on page 
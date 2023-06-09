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

let tomHumEl = document.getElementById('tomHum')
let turdHumEl = document.getElementById('turdHum')
let fourthHumEl = document.getElementById('fourthHum')
let fifthHumEl = document.getElementById('fifthHum')
//img elems
todImgel = document.getElementById('todImg')
tomImgel = document.getElementById('tomImg')
turdImgel = document.getElementById('turdImg')
frthImgEl = document.getElementById('frthImg')
fifthImgEl = document.getElementById('fifthImg')

let date = dayjs();
let currentDate = date.format('MMM D')
let tomorrowdate = date.add(1, 'day')
let turdDate = date.add(2, 'day')
let fourthDate = date.add(3, 'day')
let fifthDate = date.add(4, 'day')
console.log(tomorrowdate.format('MMM D'))

//declare some elms for the dates

let tomDateEl = document.getElementById('tomDate')
let turdDateEL = document.getElementById('turdDate')
let fourthDateEl = document.getElementById('fourthDate')
let fifthDateEl = document.getElementById('fifthDate')

tomDateEl.innerText = tomorrowdate.format('MMM D')
turdDateEL.innerText = turdDate.format('MMM D')
fourthDateEl.innerText = fourthDate.format('MMM D')
fifthDateEl.innerText = fifthDate.format('MMM D')


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '034d5daef9msh9747ed72ce10a84p1c0ee4jsn7e890345d211',
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
  }
};


function toStartSearch() {
  event.preventDefault()
  let SearchCity = document.getElementById('cityName')
  let searchCityVal = SearchCity.value
  
  callLatLon(searchCityVal)
  savedName(searchCityVal)
}


function callLatLon(whatevrCity) {
  let parameterOne = whatevrCity;
  capParam = parameterOne.toUpperCase()
  let fillName = document.getElementById('cityTitle')
  fillName.innerText = capParam
  let UrlOne = `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${parameterOne}&accept-language=en&polygon_threshold=0.0`;
  fetch(UrlOne, options)
    .then(response => response.json())
    .then(latlondata => {
      localStorage.setItem("latlondata", JSON.stringify(latlondata)); // Update this line
      let showProof = JSON.parse(localStorage.getItem('latlondata'));
      

      callWeatherData();
    });
}
function savedName(WhicheverCity) {
  let cityname = WhicheverCity
  let capitalCityName = cityname.toUpperCase()
  if (localStorage.getItem('savedCities') == null) {
    localStorage.setItem('savedCities', '[]')
  }
  let oldSavedCities = JSON.parse(localStorage.getItem('savedCities'))
  oldSavedCities.unshift(capitalCityName)
  localStorage.setItem('savedCities', JSON.stringify(oldSavedCities))
  callLatLon(cityname)
}
function callWeatherData() {
  var calledLatLon = JSON.parse(localStorage.getItem('latlondata'));

  const latitude = calledLatLon[0].lat;
  const longitude = calledLatLon[0].lon;
  const weatherApiKey = '9e237b550d1789a1ff717006257934f9';
  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApiKey}`;
  fetch(weatherUrl)
    .then(response => response.json())
    .then(myWeatherData => {
      localStorage.setItem("myWeatherData", JSON.stringify(myWeatherData)); // Update this line

      
      presentWeatherData()
      
    })
}

function presentWeatherData() {
  let visElms = document.getElementById('displayCont')
  visElms.style.visibility = 'visible'
  cityWeatherPulled = JSON.parse(localStorage.getItem('myWeatherData'))
  let todayTemp = cityWeatherPulled.list[0].main.temp;
  temp1.innerHTML = todayTemp + ' °F';
  let todaySymbl = cityWeatherPulled.list[0].weather[0].icon;
  
  todImg.src = `https://openweathermap.org/img/wn/${todaySymbl}@2x.png`
  let todaysHumid = cityWeatherPulled.list[0].main.humidity;
  todhumel.innerText = 'Humidity  ' + todaysHumid;
  let todaySpeed = cityWeatherPulled.list[0].wind.speed;
  todpressel.innerText = 'Wind Speed  ' + todaySpeed;

  let tomtemp = cityWeatherPulled.list[3].main.temp;
  templowtom.innerText = tomtemp + ' °F';
  let tomWind = cityWeatherPulled.list[3].wind.speed;
  tomHiEl.innerText = 'Wind Speed  ' + tomWind;
  let tomSym = cityWeatherPulled.list[3].weather[0].icon;
  tomImgel.src = `https://openweathermap.org/img/wn/${tomSym}@2x.png`
let tomHum = cityWeatherPulled.list[3].main.humidity
tomHumEl.innerText = 'Humidity  ' + tomHum

  let thirdLow = cityWeatherPulled.list[11].main.temp;
  thirdLowEl.innerText = thirdLow + ' °F';
  let thirdWind = cityWeatherPulled.list[11].wind.speed;
  thirdHiEl.innerText = 'Wind Speed  ' + thirdWind; 
  let thirdSymbl = cityWeatherPulled.list[11].weather[0].icon;
  turdImgel.src = `https://openweathermap.org/img/wn/${thirdSymbl}@2x.png`;
  let turdHum = cityWeatherPulled.list[3].main.humidity
  turdHumEl.innerText = 'Humidity  ' + turdHum

  let frthlw = cityWeatherPulled.list[19].main.temp;
  frthloEl.innerText = frthlw + ' °F';
  let frthWind = cityWeatherPulled.list[19].wind.speed;
  frthhiEl.innerText = 'Wind Speed  ' + frthWind;
  let frthsym = cityWeatherPulled.list[19].weather[0].icon;
  frthImgEl.src = `https://openweathermap.org/img/wn/${frthsym}@2x.png`
  let fourthHum = cityWeatherPulled.list[3].main.humidity
  fourthHumEl.innerText = 'Humidity  ' + fourthHum

  let fifthTemp = cityWeatherPulled.list[27].main.temp;
  fifthlowEl.innerText = fifthTemp + ' °F';
  let fifthWind = cityWeatherPulled.list[27].wind.speed;
  fifthhighEl.innerText = 'Wind Speed  ' + fifthWind;
  let fifthsymb = cityWeatherPulled.list[27].weather[0].icon;
  fifthImgEl.src = `https://openweathermap.org/img/wn/${fifthsymb}@2x.png`;
  let fifthHum = cityWeatherPulled.list[3].main.humidity
  fifthHumEl.innerText = 'Humidity  ' + fifthHum

}
function makeDropDown() {

  let cityNameHist = JSON.parse(localStorage.getItem('savedCities'))
  console.log(cityNameHist)
  //save the name of the city  in an array then list array into the dropdown 
  let firstCityElm = document.createElement('li');
  firstCityElm.id = 'FirstCity'
  firstCityElm.className = 'dropdown-item ddn'
  firstCityElm.href = '#'
  firstCityElm.textContent = cityNameHist[0]
  firstCityElm.addEventListener('click', function () {
    callLatLon(cityNameHist[0])  // had to ask chatGPT for proper syntax. i was off but not sure why my way didnt work. 
  })
  let listElm = document.getElementById('listPop')
  listElm.appendChild(firstCityElm)

  let secondCityElm = document.createElement('li');
  secondCityElm.id = 'secondCity'
  secondCityElm.className = 'dropdown-item ddn'
  secondCityElm.href = '#'
  secondCityElm.textContent = cityNameHist[1]
  secondCityElm.addEventListener('click', function () {
    callLatLon(cityNameHist[1])
  })
  listElm.appendChild(secondCityElm)

  let thirdCityElm = document.createElement('li');
  thirdCityElm.id = 'thirdCity'
  thirdCityElm.className = 'dropdown-item ddn'
  thirdCityElm.href = '#'
  thirdCityElm.textContent = cityNameHist[2]
  thirdCityElm.addEventListener('click', function () {
    callLatLon(cityNameHist[2])
  })
  listElm = document.getElementById('listPop')
  listElm.appendChild(thirdCityElm)

  let fourthCityElm = document.createElement('li');
  fourthCityElm.id = 'fourthCity'
  fourthCityElm.className = 'dropdown-item ddn'
  fourthCityElm.href = '#'
  fourthCityElm.textContent = cityNameHist[3]
  fourthCityElm.addEventListener('click', function () {
    callLatLon(cityNameHist[3])
  })
  listElm = document.getElementById('listPop')
  listElm.appendChild(fourthCityElm)

  let fifthCityElm = document.createElement('li');
  fifthCityElm.id = 'fifthCity'
  fifthCityElm.className = 'dropdown-item ddn'
  fifthCityElm.href = '#'
  fifthCityElm.textContent = cityNameHist[4]
  fifthCityElm.addEventListener('click', function () {
    callLatLon(cityNameHist[4])
  })
  listElm = document.getElementById('listPop')
  listElm.appendChild(fifthCityElm)
 
 setTimeout(function(){
  let timedArr = [firstCityElm, secondCityElm, thirdCityElm, fourthCityElm, fifthCityElm];
  deleteElm = document.getElementById('dropDown')
  for (var i = 0; i < timedArr.length; i++)
  //deleteElm.removeChild(timedArr[i])  -- didnt work this way.. 
 timedArr[i].parentNode.removeChild(timedArr[i]); //i needed help with how to properly word this function
 }, 5000)
}


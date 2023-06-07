# 365Weather

This is a weather application that displays the current weather and 5-day forecast for a given city. The application fetches weather data from OpenWeatherMap API and displays it in a user-friendly interface.

![Screen Shot](./images/365WeatherScreenShot.png)

## Features
- **Current weather:** The application displays the current temperature, humidity, and pressure for the selected city. It also shows an icon representing the current weather condition.

- **5-day forecast:** The application provides a 5-day forecast for the selected city, including the minimum and maximum temperature for each day. It also displays weather icons representing the weather condition for each day.

- **search city by name:** Users can search for weather data by entering the name of a city. The application uses forward-geocoding API to fetch the latitude and longitude 

- **save searched cities:** The application allows users to save previously searched cities for quick access. The saved cities are stored in local storage so that they persist even after the page is refreshed.


## Development

- This code was developed in VScode as an assignment. This was my first real experience with using functions to this degree. I initially developed a single, large function to process the input and return data, but this made the ability to add stored information difficult. I essentially had to rewrite the entire JavaScript as opposed to writing a second large function that did almost the same thing. In the future I would Like to find alternate icons to the icons provided through OpenWeatherMap as well as utilize more of the data available. 

## APIs Used

- Weather data is made possible through 'OpenWeatherMap' 
"https://openweathermap.org/api"
- API keys are available at the above mentioned site. 

- Forward geo-location is made possible through 'Forward-Geocoding '
"https://rapidapi.com/GeocodeSupport/api/forward-reverse-geocoding"


## Frameworks
- initial site layout and styling made possible through 'Bootstrap'
"https://getbootstrap.com/"




## Credits

- OpenWeatherMap API: https://openweathermap.org/
- RapidAPI: https://rapidapi.com/
- Icons: https://openweathermap.org/weather-conditions
- Vector background is from Starline @ freepik: 
    https://www.freepik.com/author/starline


## Links
- Repository: 
https://github.com/Edwardwells87/365Weather

- Live App
https://edwardwells87.github.io/365Weather/


import React, { useState } from 'react'
import "./WeatherApp.css"

import search_icon from "../images/search.png";
import rain_icon from "../images/rain.png";
import snow_icon from "../images/snow.png";
import wind_icon from "../images/wind.png";
import humidity_icon from "../images/humidity.png";
import cloud_icon from "../images/cloud.png";
import drizzle_icon from "../images/drizzle.png";
import clear_icon from "../images/clear.png";


const WeatherApp = () => {

  let API_key = '6d51b26c11e748c8679c2481892dd1a9';

  const [icon,setIcon] = useState(cloud_icon);

  const search = async ()=>{
    const element = document.getElementsByClassName("city");

    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${API_key}`;

    let responce = await fetch(url);
    let data = await responce.json();

    const humidity = document.getElementsByClassName("humidity_percent");
    const wind = document.getElementsByClassName("wind_speed");
    const temp = document.getElementsByClassName("weather_temp");
    const location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temp[0].innerHTML = data.main.temp + "";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setIcon(clear_icon);
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setIcon(cloud_icon);
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setIcon(drizzle_icon);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setIcon(drizzle_icon);
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setIcon(rain_icon);
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setIcon(rain_icon);
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setIcon(snow_icon);
    }
    else{
      setIcon(clear_icon);
    }

  }

  return (
    <div className='main'>
      <div className='second_main'>
          <input type='text' className='city' placeholder='Search'></input>
          <div className='search_item' onClick={()=>{search()}}>
            <img src={search_icon} alt='search'></img>
          </div>
      </div>
      <div className='weather_icon'>
        <img src={icon} alt='cloud'></img>
      </div>
      <div className='weather_temp'>24c</div>
      <div className='weather_location'>London</div>
      <div className='data_weather'>
        <div className='element'>
            <img src={humidity_icon} alt='' className='icon'></img>
            <div className='data'>
                <div className='humidity_percent'>64%</div>
                <div className='text'>Humidity</div>

            </div>
        </div>

        <div className='element'>
            <img src={wind_icon} alt='' className='icon'></img>
            <div className='data'>
                <div className='wind_speed'>28 km/h</div>
                <div className='text'>Wind Speed</div>

            </div>
        </div>
        </div>  

    </div>
  )
}

export default WeatherApp
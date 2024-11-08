import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import cloudy_icon from '../assets/cloudy.png'
import evening_icon from '../assets/evening.png'
import foggy_icon from '../assets/foggy.png'
import morning_icon from '../assets/morning.png'
import night_icon from '../assets/night.png'
import partlycloudy_icon from '../assets/partly-cloudy.png'
import partlyrainy_icon from '../assets/partly-rainy.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import sunny_icon from '../assets/sunny.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search...' />
            <img src={search_icon} alt="" />
        </div>
        <img src={sunny_icon} alt="" className='weather-icon' />
        <p>75°F</p>
    </div>
  )
}

export default Weather

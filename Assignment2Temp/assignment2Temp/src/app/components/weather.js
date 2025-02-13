"use client"
import React, { useEffect } from 'react'
import "./weather.css"
import { useState } from "react";
import axios from 'axios'

//display todays weather for city
const WeatherWidget = ({location}) => {
    const [weatherData, setWeatherData] = useState(null)
    
    //get weather data from api and set to weatherData
    useEffect(()=> {
        if(location.length){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5b6d1a529f7de719dccf535e6b2f0aa6&units=metric`)
            .then(response =>{
                setWeatherData(response.data)
            }).catch(error=>{
                console.error("error: ", error)
            })
        }

    }, [location])

    //if no data available yet, display still loading
    if(!weatherData) return <div>Loading...</div> 


    return (
        <div className='weather-widget'>
            <div className='sun'></div>
            <div className='temperature'>{Math.round(weatherData.main.temp)}°</div>
            <div className='weather'>{weatherData.weather[0].main}</div>
            <div className='low-high'>{Math.round(weatherData.main.temp_min)}° / {Math.round(weatherData.main.temp_max)}°</div>
            <div className='feels-like'>Feels like: {Math.round(weatherData.main.feels_like)}°</div>
            <div className='location'>{weatherData.name}</div>
            <div className='humidity'>Humidity: {weatherData.main.humidity}</div>
        </div>
    )
}

export default WeatherWidget
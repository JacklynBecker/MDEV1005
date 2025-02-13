"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
import "./page.css"

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const API_KEY = "IyDcXKoNrADcCXq5e6tbgHr5xVqz8sYd"; // Replace with your Tomorrow.io API key
  const [location, setLocation] = useState('toronto'); // Latitude, Longitude for New York
  const [inputValue, setInputValue] = useState('toronto');

  //get weather data and set to forecast
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature&timesteps=1d&apikey=${API_KEY}`
        );
        const data = await response.json();
        setForecast(data.data.timelines[0].intervals);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [location]);

  //set location when input and button clicked
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLocation(inputValue)
  }

  //display weather icon
  const getWeatherIcon = (temp) => {
    if (temp >= 25) return <WiDaySunny size={50} />;
    if (temp >= 15) return <WiCloud size={50} />;
    if (temp >= 5) return <WiRain size={50} />;
    return <WiSnow size={50} />;
  };

  //change result from json to day of week string
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="entire-container">
        <h1>7-Day Forecast</h1>
        <form onSubmit={handleFormSubmit}>
              <input type="text" value={inputValue} 
              onChange={(e)=> {setInputValue(e.target.value)}}/>
              <button className='location-button' type="submit">Update Location</button>
            </form>
    <div className="forecast-container">
      {forecast.map((day, index) => (
        <Card key={index} className="card-container">
          <CardContent>
            <p >{getDayOfWeek(day.startTime)}</p>
            {getWeatherIcon(day.values.temperature)}
            <p >{Math.round(day.values.temperature)}°C</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default WeatherForecast;
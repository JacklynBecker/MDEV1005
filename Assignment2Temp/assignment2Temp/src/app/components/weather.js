"use client"
import React from 'react'
import "./weather.css"

import axios from 'axios'

import MoonSvg from '../assets/svgs/dark_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg'
import CloudSvg from "../assets/svgs/cloud_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg"


const WeatherWidget = ({location}) => {
    //const { currentUser } = useAuth();
    //console.log("HEREEE: " + currentUser);
    return (
        <div className='weather-widget'>
            <img src={MoonSvg} alt="MoonSVG" className='moon'/>
            <div className='cloud-container'>
                <img src={CloudSvg} alt="cloudSVG" className='cloud'/>
            </div>
            <div className='temperature'>temperature</div>
            <div className='weather'>weather</div>
            <div className='low-high'>low-high</div>
            <div className='feels-like'>feels-like</div>
            <div className='location'>{location}</div>
            <div className='humidity'>humidity</div>
        </div>
    )
}

export default WeatherWidget
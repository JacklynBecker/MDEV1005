"use client"
import React, { useEffect } from 'react'
import "./drinks.css"
import { useState } from "react";
import axios from 'axios'

//display searched up drink
const DrinkWidget = ({drink}) => {
    const [drinkData, setDrinkData] = useState(null)
    
    //get drink data
    useEffect(()=> {
        if(drink.length){
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
            .then(response =>{
                setDrinkData(response.data)
                console.log(drinkData)
            }).catch(error=>{
                console.error("error: ", error)
            })
        }

    }, [drink])

    if(!drinkData) return <div>Loading...</div> 

    if(drinkData.drinks == null) return <div>None Found</div>

    return (
        <div className='drink-widget'>
            <div className='drinkName'>{drinkData.drinks[0].strDrink}</div>
            <img src={drinkData.drinks[0].strDrinkThumb} alt="Image" className='drinkImage'/>
            <div className='drinkInstructions'>For Complete Recipe Visit Drinks Page.</div>
        </div>
    )
}

export default DrinkWidget
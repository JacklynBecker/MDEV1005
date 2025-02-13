"use client"
import React, { useEffect } from 'react'
import "./page.css"
import { useState } from "react";
import axios from 'axios'
import DrinksList from './drinkList';


const Drinks = () => {
    const [drinkData, setDrinkData] = useState(null)
    const [drink, setDrink] = useState('margarita');
    const [inputValue, setInputValue] = useState('margarita');

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

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setDrink(inputValue)
      }

    if(!drinkData) return <div>Loading...</div> 

    if(drinkData.drinks == null) return <div>None Found</div>

    return (
        <div className='drink-widget-container'>
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={inputValue} 
              onChange={(e)=> {setInputValue(e.target.value)}}/>
              <button className='drink-button' type="submit">Update Drink</button>
            </form>
            <div className='drinks-container'>
            <div className='drink-widget'>
                <div className='drinkName'>{drinkData.drinks[0].strDrink}</div>
                <img src={drinkData.drinks[0].strDrinkThumb} alt="Image" className='drinkImage'/>
                <div>Ingredients: </div>
                <DrinksList drinkData={drinkData.drinks[0]}/>
                <div className='drinkInstructions'>{drinkData.drinks[0].strInstructions}</div>
            </div>
            {drinkData.drinks[1] && (
            <div className='drink-widget'>
                <div className='drinkName'>{drinkData.drinks[1].strDrink}</div>
                <img src={drinkData.drinks[1].strDrinkThumb} alt="Image" className='drinkImage'/>
                <div>Ingredients: </div>
                <DrinksList drinkData={drinkData.drinks[1]}/>
                <div className='drinkInstructions'>{drinkData.drinks[1].strInstructions}</div>
            </div>
            )}
            </div>
        </div>
    )
}

export default Drinks
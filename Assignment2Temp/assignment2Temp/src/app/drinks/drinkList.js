"use client"
import React, { useEffect } from 'react'


//handle the ingredients list, check if ingredient exist before displaying
const DrinksList = ({drinkData}) => {

    if(!drinkData) return <div>Loading...</div> 

    return (
                <ul className='drinkIngredients'>
                    <li>{drinkData.strMeasure1} {drinkData.strIngredient1}</li>
                    {drinkData.strIngredient2 && (
                                <li>{drinkData.strMeasure2} {drinkData.strIngredient2}</li>
                                )}
                    {drinkData.strIngredient3 && (
                                <li>{drinkData.strMeasure3} {drinkData.strIngredient3}</li>
                                )}
                    {drinkData.strIngredient4 && (
                                <li>{drinkData.strMeasure4} {drinkData.strIngredient4}</li>
                                )}
                    {drinkData.strIngredient5 && (
                                <li>{drinkData.strMeasure5} {drinkData.strIngredient5}</li>
                                )}
                    {drinkData.strIngredient6 && (
                                <li>{drinkData.strMeasure6} {drinkData.strIngredient6}</li>
                                )}
                    {drinkData.strIngredient7 && (
                                <li>{drinkData.strMeasure7} {drinkData.strIngredient7}</li>
                                )}
                    {drinkData.strIngredient8 && (
                                <li>{drinkData.strMeasure8} {drinkData.strIngredient8}</li>
                                )}
                    {drinkData.strIngredient9 && (
                                <li>{drinkData.strMeasure9} {drinkData.strIngredient9}</li>
                                )}
                    {drinkData.strIngredient10 && (
                                <li>{drinkData.strMeasure10} {drinkData.strIngredient10}</li>
                                )}
                </ul>

    )
}

export default DrinksList
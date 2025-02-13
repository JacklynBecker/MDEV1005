"use client"
import { useAuth } from "./contexts/authContext";
import WeatherWidget from "./components/weather";
import UserWidget from "./components/user";
import DrinkWidget from "./components/drinks";
import { useState } from "react";
import "./page.css"
import MemeWidget from "./components/meme";
import Calculator from "./components/calculator/calculator";
import ToDoList from "./components/ToDoList";


const Home = () => {
  const { currentUser } = useAuth();
  const [inputValue, setInputValue] = useState('London');
  const [location, setLocation] = useState('London');
  const [input2Value, setInput2Value] = useState('margarita');
  const [drink, setDrink] = useState('margarita');

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLocation(inputValue)
  }

  const handleForm2Submit = (e) => {
    e.preventDefault()
    setDrink(input2Value)
  }
  //console.log(currentUser);
  return (
    <div>
      <div>
        {currentUser === null && (
          <div className="home-container"> Please Sign In To View Content! </div>
        )}
      </div>
      <div>
        {currentUser && (
          <div>
          <div className="component-container">
            <UserWidget/>
            <div className="weather-container">
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={inputValue} 
              onChange={(e)=> {setInputValue(e.target.value)}}/>
              <button type="submit">Update Location</button>
            </form>
            <WeatherWidget location={location}/>
            </div>
            <div className="drink-container">
            <form onSubmit={handleForm2Submit}>
              <input type="text" value={input2Value} 
              onChange={(e)=> {setInput2Value(e.target.value)}}/>
              <button type="submit">Update Drink</button>
            </form>
            <DrinkWidget drink={drink}/>
            </div>
          </div>
          <div className="component-container">
          <MemeWidget/>
          <Calculator/>
          </div>
          <ToDoList/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

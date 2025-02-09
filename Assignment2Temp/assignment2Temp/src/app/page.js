"use client"
import { useAuth } from "./contexts/authContext";
import WeatherWidget from "./components/weather";
import UserWidget from "./components/user";
import { useState } from "react";

const Home = () => {
  const { currentUser } = useAuth();
  const [inputValue, setInputValue] = useState('London');
  const [location, setLocation] = useState('London');

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLocation(inputValue)
  }
  //console.log(currentUser);
  return (
    <div>
      <div>
        {currentUser === null && (
          <div> Please Sign In To View Content! </div>
        )}
      </div>
      <div>
        {currentUser && (
          <div>
            <UserWidget/>
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={inputValue} 
              onChange={(e)=> {setInputValue(e.target.value)}}/>
            </form>
            <WeatherWidget location={location}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

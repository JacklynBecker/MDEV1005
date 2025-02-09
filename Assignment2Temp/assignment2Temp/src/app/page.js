"use client"
import { useAuth } from "./contexts/authContext";
import WeatherWidget from "./components/weather";

const Home = () => {
  const { currentUser } = useAuth();
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
            <WeatherWidget/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import Search from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Jaipur",
        feelsLike : 299.29,
        humidity  : 73,
        temp : 298.77,
        temp_max :298.77,
        temp_min: 298.77,
        weather: "haze",
      })

      let updateInfo = (result) =>{
         setWeatherInfo(result) ;
      }
    return (
        <div className="WeatherApp">
            <h1>Weather App </h1>
            <Search  updateInfo ={updateInfo}/>
            <InfoBox info = {weatherInfo} />
        </div>
    )
}
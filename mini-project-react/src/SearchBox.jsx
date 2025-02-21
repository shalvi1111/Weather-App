import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { colors } from '@mui/material';


export default function Search({updateInfo}){
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const APT_Key = "9a28dd434ed35708fde92081fcdddd71";
    let getWeather = async () =>{
        try {
      let response =   await fetch(`${API_URL}?q=${city}&appid=${APT_Key}&units=metric`);
       let responseJSON = await response.json();
       console.log(responseJSON);
       let result = {
          city : city ,
          feelsLike : responseJSON.main.feels_like,
          temp : responseJSON.main.temp ,
          humidity  : responseJSON.main.humidity ,
          temp_max  : responseJSON.main.temp_max ,
          temp_min : responseJSON.main.temp_min,
          weather : responseJSON.weather[0].description
       }
       console.log(result);
       return result;
    } 
      catch(err){
        throw err ;
      }
    }
   let [city , setCity] = useState("");
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt)=>{
        try {
        evt.preventDefault();
        console.log(city);
        setCity("") ;
      let info=  await getWeather();
        updateInfo(info);
    }  catch(err){
        setError(true);
    }
  };
    return (
        <div className='SearchBox' >
         <h2>Search for the weather</h2>
          <form onSubmit={handleSubmit}>
         <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
         <br></br> <br></br>
         <Button variant="contained" size="small" type='submit'> Search </Button>
           {error  && <p style={{color: "red"}}>No such place exist!</p>}
         </form> 
        </div>
    )
}
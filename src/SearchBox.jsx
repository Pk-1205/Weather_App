import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const[error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8bfafdd48008e4ec417321da63fcbc30";

     let getWeatherInfo = async ()=>{
      try {

        let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponce = await response.json();
    //   console.log(jsonResponce);
      let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        Humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,

       };
       console.log(result);
       return result;
       
        
      } catch (error) {
        throw error;
        
      }

     };

    

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
       try {
         event.preventDefault();
        console.log(city);
        setCity("");
     let newInfo =   await getWeatherInfo();
     updateInfo(newInfo)
        
       } catch (error) {
        setError(true);
        
       }
    };

    return (
        <div className='SearchBox'>
            <h3>Search City</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such Place exists!</p>}
            </form>
        </div>
    );
}

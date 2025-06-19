import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function Weather(){
    const [weatherInfo, setWeatherInfo] = useState({
         city: "Weather",
        feelslike: 24.84,
        temp: 25,
        tempMin: 23,
        tempMax:31,
        humidity: 37,
        weather: "Haze"
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )

}
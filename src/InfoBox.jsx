import Card from '@mui/material/Card';
import "./InfoBox.css";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const Image1 = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const Hot_Url = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    const cold_Url = "https://images.unsplash.com/photo-1587640542932-064a5291cfbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_Url ="https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=tBFS70k3IOnu9KTQpTvaX4YcYlAopW1McMzTh1IbQ-c=";


  



    return(
        <div className="infoBox">
            <h1>Weather Info - {info.weather} </h1>
            <div className='card_container'>
             <Card sx={{ width: '100%', maxWidth: 370  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humidity>80 ? rain_Url  : info.temp>15?Hot_Url:cold_Url}
        title="green iguana"
      />
      <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {info.city}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Temperature: {info.temp}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Min Temp: {info.tempMin}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Max Temp: {info.tempMax}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Humidity: {info.Humidity}%
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Feels Like: {info.feelsLike}°C
  </Typography>
</CardContent>

     
    </Card>
    </div>
        </div>
    )
}
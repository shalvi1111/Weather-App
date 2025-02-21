import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let InIT_IMG = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Summer_URL = "https://images.unsplash.com/photo-1538924275405-1c2b8cd53691?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Winter_URL = "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_URL = "https://plus.unsplash.com/premium_photo-1675468310289-a72bc97c3e97?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ info.humidity >80 ? Rain_URL : info.temp > 20 ? Summer_URL : Winter_URL}
      />
       <div  >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} { info.humidity >80 ? <ThunderstormIcon /> : info.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div><b>Temperature :</b>  {info.temp}&deg;C</div>
          <div><b> Weather can be described as <i>{info.weather}</i> and feels like :</b>  {info.feelsLike}&deg;C</div>
          <div><b>Hummidity :</b>  {info.humidity}</div>
          <div><b>Min Temperature :</b>  {info.temp_min}&deg;C</div>
          <div><b>Max Temperature :</b>  {info.temp_max}&deg;C</div>
        </Typography>
      </CardContent>
       </div>
    </Card>

        </div>
    )
}
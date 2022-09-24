// Погода

function WeatherBlock(props) {
  return (
    <div>
      <div>Погода</div>
      <div className="weather">
        <img className="weather-image" src={props.weatherItem.image} alt=""/>
        <h2>{props.weatherItem.currentTemp}</h2>
        <div>Утром {props.weatherItem.morningTemp},</div>
        <div>Днём {props.weatherItem.dayTemp}</div>
      </div>
    </div>
  );
}

export default WeatherBlock;
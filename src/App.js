
import './App.css';

function App() {
    let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
    imgadviceUrl:
      "https://www.wallpaperup.com/uploads/wallpapers/2016/10/19/1027617/205ee8be1371c7b5d2725413712f0abb-700.jpg",
    advice: "Get your sunglasses and a pair of shorts out!"
  };

  return (
    <div className="App">
      <div className="weather">
        <h1>
          <i className="fas fa-rainbow"> </i>
          Weather On The Go....
        </h1>

        <div className="row">
          <div className="col-7">
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lisbon"
                />
                <label>Enter City here</label>
              </div>
            </form>
          </div>

          <div className="col-5">
            <div className="current-location-column clearfix">
              <i className="fas fa-search-location float-left"></i>
              <button className="btn btn-info float-right">
                Current location
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col -4">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img src={weatherData.imgUrl} alt="weatherIcon" />
                </div>
                <div className="col-8">
                  <h5 className="card-title">{weatherData.city}</h5>
                  <div className="card-text">
                    <span className="temp">{weatherData.temperature}</span>
                    <span className="units">°C | °F</span>
                  </div>
                  <p className="card-text"> Last Updated: </p>{" "}
                  <span> {weatherData.date} </span>
                  <p className="card-text">10°C / 18°C </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col -4">
            <div className="card">
              <h5 className="card-title">{weatherData.description}</h5>
              <p className="card-text">
                Wind: {weatherData.wind} km/h
                <br />
                Humidity: {weatherData.humidity} %
              </p>
            </div>
          </div>

          <div className="col -4">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img
                    src={weatherData.imgadviceUrl}
                    className="weather-advice-img"
                    alt="advice"
                  />
                </div>
                <div className="col-8">
                  <h5 className="card-title">Daily Weather advice</h5>
                  <p className="card-text">{weatherData.advice}</p>
                </div>
              </div>
            </div>
          </div>     
          <div id= "open-source"> <a href="https://github.com/Reshvinder/my-weather-app" target="_blank"> <small>Open-source code</small></a> <small> by Reshvinder Bhullar </small> </div>
              </div> 
       
      </div>
    </div>
  );
}

export default App;

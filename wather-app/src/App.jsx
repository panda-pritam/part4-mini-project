import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function App() {
  let [city, setCity] = useState("");
  let [loader, setLoader] = useState(false);
  let [apiData, setApiData] = useState("");
  let cityInput = useRef();
  let apiKey = "b6f5713e12f440e69d5211801242903";
  let printCards = (data) => {
    setLoader(false);
    return (
      <div className="cardDiv">
        <div className="card">
          <h1 className="cardTitle">Temperature</h1>
          <h2 className="cardData">
            {data.temp_c}
            <span> &deg;C</span>
          </h2>
        </div>
        <div className="card">
          <h1 className="cardTitle">Humidity</h1>
          <h2 className="cardData">{data.humidity}%</h2>
        </div>
        <div className="card">
          <h1 className="cardTitle">Condition</h1>
          <h2 className="cardData">{data.condition.text}</h2>
        </div>
        <div className="card">
          <h1 className="cardTitle">Wind Speed</h1>
          <h2 className="cardData">{data.wind_kph} kph</h2>
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (city.length > 0) {
      axios(`https://api.weatherapi.com/v1/current.json?q=${city}`, {
        headers: {
          key: apiKey,
        },
      })
        .then((res) => {
          // setLoader(true);
          console.log(res.data.current);
          // console.log(res.current);
          let data = printCards(res.data.current);
          setApiData(data);
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to fetch weather data.");
          setLoader(false);
        });
    }
  }, [city]);

  return (
    <div className="App">
      <div className="inpDiv">
        <input
          type="text"
          placeholder="Enter city name"
          id="cityInput"
          ref={cityInput}
        />
        <button
          className="btn"
          type="button"
          onClick={(e) => {
            //console.log(cityInput.current.value);
            setLoader(true);
            setApiData("");
            setCity(cityInput.current.value);
          }}
        >
          Search
        </button>
      </div>
      {loader && <p>Loading data.....</p>}
      {apiData}
    </div>
  );
}

export default App;

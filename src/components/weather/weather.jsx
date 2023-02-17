import React, { useEffect, useState } from "react";
import "./weather.css";
function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a16375f27891ffa60cb1a9905328304b`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      {/* <h1>{weather.map(()=>{
            return
        })}</h1> */}
      {/* <h1>{data.name} name</h1> */}
      <h1>Name</h1>
      <div className="details">
        <h1 className="id">Temp</h1>
        <h1 className="id">Id</h1>
        <h1 className="id">Id</h1>
        <h1 className="id">Id</h1>
      </div>
      {/* <h1>{data.main.temp} temp</h1> */}
      {/* <h1>{data.weather[0].id} id</h1> */}
    </main>
  );
}

export default Weather;

import React from "react";
import Movie from "./components/movies";
import TmdbApi from "./components/TmdbAPI";
import Weather from "./components/weather/weather";

function App(){
  return(
    <div>
    {/* <h1>Hello World</h1> */}
    {/* <TmdbApi /> */}
  <Weather />
    </div>
  )
}

export default App;
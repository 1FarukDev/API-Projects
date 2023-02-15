import React from "react";
import Movie from "./components/movies";
import TmdbApi from "./components/TmdbAPI";

function App(){
  return(
    <div>
    <h1>Hello World</h1>
    <TmdbApi />
    </div>
  )
}

export default App;
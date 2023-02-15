import React, {useState, useEffect} from "react"
import Movie from "./movies"
export default function TmdbApi() {
    const [endPoint, setEndPoint] = useState("")
    const [container, setContainer] = useState([]);
   function handleChange(event){
    setEndPoint(event.target.value)
    }
    useEffect(()=>{
       fetchMe()
    },[])
   const fetchMe  = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=2a3280663a8d9f2c1d3ca013a681f5b3`
        );
    const movies = await data.json()
    console.log(movies)
    setContainer(movies.results)
   }
        const submitHandler = e => {
            e.preventDefault()
        }
    return (
        <main>
      <form onSubmit={submitHandler}>
        <input type="text" 
        value={endPoint}
        onChange={handleChange}
        />
        <button type="Submit">Submit</button>
      </form>  
      <div className="container">
        {container.map(movie => {
            return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
      </main>
    )
}
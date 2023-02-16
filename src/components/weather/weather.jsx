import React, { useEffect, useState } from "react";
import axios from "axios";
function Weather(){
    const [city, setCity] = useState('')
    const [data, setData] = useState({});
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}16375f27891ffa60cb1a9905328304b`
    //    const searchLocation  = (event) => {
    //     if(event.key === 'Enter'){
    //         axios.get(url).then((response) =>{
    //             console(response.data)
    //             // console.log(response.data)
    
// a16375f27891ffa60cb1a9905328304b
    //         })
    //     }
        
    //    }
        function handleSubmit(event){
            event.preventDefault()
        
        }
        const handleSearch = () =>{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a16375f27891ffa60cb1a9905328304b`)
            .then(res => res.json())
            .then((result) => {
                setData(result)
                // console.log(result)
            })
        }
    return(
       <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Enter City"
            onChange={event => setCity(event.target.value)}
           
            />
           <button onClick={handleSearch}>Search</button>
        </form>
        {/* <h1>{weather.map(()=>{
            return
        })}</h1> */}
        <h1>{data.name}</h1>
        <h1>{data.main.temp}</h1>
        <h1>{data.weather[0].id}</h1>
        </>
    )
}

export default Weather;
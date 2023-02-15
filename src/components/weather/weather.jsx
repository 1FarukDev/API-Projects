import React, { useEffect, useState } from "react";
import axios from "axios";
function Weather(){
    const [city, setCity] = useState('')
    const [data, setData] = useState({})
        const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a16375f27891ffa60cb1a9905328304b`
       const searchLocation  = (event) => {
        if(event.key === 'Enter'){
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data)
            })
        }
        
       }
        function handleSubmit(event){
            event.preventDefault()
            setCity(event.target.value)
        }
    return(
       <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Enter City"
            value={city}
            // onChange={handleChange}
            />
            <input type="submit" />
        </form>
        {/* <h1>{weather.map(()=>{
            return
        })}</h1> */}
        <h1>clouds</h1>
        </>
    )
}

export default Weather;
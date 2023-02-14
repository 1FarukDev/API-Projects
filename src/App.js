import React, {useState, useEffect} from "react"

export default function App() {
    const [endPoint, setEndPoint] = useState("")
    const [container, setContainer] = useState([])
   function handleChange(event){
    setEndPoint(event.target.value)
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c426e5fdefmsh07a75834dd28af7p11b52ejsn93188bc95f06',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    useEffect(()=>{
       fetchMe()
    },[endPoint])
   const fetchMe =()=>{
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
    // fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(data => setContainer(data.d))
    // .catch(err => console.error(err));
   }
//   console.log(container)
        const submitHandler = e => {
            e.preventDefault()
        }
    //    const containerItem = container.map(item => {
    //     return(
    //         <p>{item.l}</p>
    //     )
    //    })
    return (
        <main>
        <div>
      <form onSubmit={submitHandler}>
        <input type="text" 
        value={endPoint}
        onChange={handleChange}
        />
        <button type="Submit">Submit</button>
      </form>  
      </div>
      <div>
     <p>{item.l}</p>
      </div>
      </main>
    )
}
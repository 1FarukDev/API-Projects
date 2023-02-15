import React  from "react";

function Movie(props){
    return(
        <div>
            <h2>{props.movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path} alt="" />
        </div>
    )
}


export default Movie;
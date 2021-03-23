import React from 'react'
import MovieCard from './MovieCard'
import '../styles/MovieList.css'


function MovieList(props) {
    return (
        <div className="List">
            {props.Movies.filter(movie=>movie.rating.includes(props.setSearchRating) && (movie.name).toUpperCase().includes(props.Keyword.toUpperCase())).map((movie,index)=>
            <MovieCard key={index} Movie={movie}/>)}   
        </div>
    )
}

export default MovieList;

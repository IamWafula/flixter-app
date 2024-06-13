import "./FeaturedMovie.css";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedMovie(props) {

    let default_movie = {
        id: 0,
        title: "Example Title",
        image: "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
        watched: true,
    }

    // console.log(props.movieData)

    let movie = props.movieData ? props.movieData : default_movie;

    return (
        <div className="featured-movie">
            <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" />
            <p>{movie.original_title}</p>
            <FontAwesomeIcon className="icon" icon={ props.watched ? faEye : faHeart } color={ props.watched ? "white" : "red" } />
        </div>
    )
}

import "./MovieDetails.css";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'

import Genre from "../Genre/Genre";

function getGenres(genreID){
  switch (genreID) {
    case 28:
      return "Action";
    case 12:
      return "Adventure";
    case 16:
      return "Animation";
    case 35:
      return "Comedy";
    case 80:
      return "Crime";
    case 99:
      return "Documentary";
    case 18:
      return "Drama";
    case 10751:
      return "Family";
    case 14:
      return "Fantasy";
    case 36:
      return "History";
    case 27:
      return "Horror";
    case 10402:
      return "Music";
    case 9648:
      return "Mystery";
    case 10749:
      return "Romance";
    case 878:
      return "Science Fiction";
    case 10770:
      return "TV Movie";
    case 53:
      return "Thriller";
    case 10406:
      return "War";
    case 37:
      return "Western";
    default:
      return "Unknown";
  }
}


function MovieDetails(props) {
  const movie = props.currentMovie;

  console.log(movie);


  let movie_name, movie_description, movie_genres, movie_poster;

  // console.log(movie.genre_ids)

  movie_genres = [];

  if (!movie) {
    movie_name = "Movie Name Default";
    movie_description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis nihil et doloremque corrupti at ex, ducimus prov"
    movie_poster = "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5"
  } else {
    movie_name = movie.original_title
    movie_description = movie.overview
    movie_poster = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
    movie_genres = movie.genre_ids
  }



  return (

    <div id="backdrop" style={ { display: movie? "flex" : "none" }} >
      <div id="movieModal" style={{ backgroundImage: `url(${movie_poster})`}}>
        <div id="movie_details_container">
          <div id="movie_details">
              <h1>{movie_name}</h1>
              <p id="date">10th January 2024</p>
              <p id="description">{movie_description}</p>

              <div id="movie_genres">

                  {movie_genres.map((genre, index) => {
                    return (
                      <Genre key={index} genre_name={getGenres(genre)}/>
                      )
                  })}

              </div>
          </div>

        </div>

        <button id="play_btn">play trailer</button>

      </div>
    </div>

  )
}


export default MovieDetails;

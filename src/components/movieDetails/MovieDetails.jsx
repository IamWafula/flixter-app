import "./MovieDetails.css";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEye, faHeart, faX, faPlay } from '@fortawesome/free-solid-svg-icons'

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


function getMovieDetails(movie_id){
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&append_to_response=videos`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTE0NWJmMDkzMjhiODlmMTMxZTRkN2M0YWE5NTZjYyIsInN1YiI6IjY2Njc3OTc3ZjlkNjI5MGE0YmRkYjRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twUqBPeVcAH9gkl6PwZr2680GBrIAHo_-0jo2TslfHs'
    }
  };

  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
    }})
    .then(data => {
      return data;
    })
}

function getTrailerUrl(movie_id, api_key){
  if (movie_id === 0) {
    return null;
  }


  const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTE0NWJmMDkzMjhiODlmMTMxZTRkN2M0YWE5NTZjYyIsInN1YiI6IjY2Njc3OTc3ZjlkNjI5MGE0YmRkYjRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twUqBPeVcAH9gkl6PwZr2680GBrIAHo_-0jo2TslfHs'
    }
  };


  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => {
      if (data) {

        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].type == "Trailer") {
            return data.results[i].key;
          }
        }
      }

      return null;
    })


}


function MovieDetails(props) {
  const movie = props.currentMovie;
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [runtime, setCurrentMovieRunTime] = useState("");
  let api_key = import.meta.env.VITE_API_KEY;
  let movie_name, movie_description, movie_genres, movie_poster, movie_id, run_time;

  movie_genres = [];

  if (!movie) {
    movie_id = 0;
    movie_name = "Movie Name Default";
    movie_description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis nihil et doloremque corrupti at ex, ducimus prov"
    movie_poster = "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5"
  } else {
    movie_id = movie.id;
    movie_name = movie.original_title
    movie_description = movie.overview
    movie_poster = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
    movie_genres = movie.genre_ids
    run_time = ""

    // inefficient way to get runtime, but it works
    getMovieDetails(movie_id).then((data) => {
      run_time = `- Runtime: ${data.runtime} minutes`;
      setCurrentMovieRunTime(run_time);
      console.log(run_time);
    })

  }



  return (

    <div id="backdrop" style={ { display: movie? "flex" : "none" }}>

      <FontAwesomeIcon icon={faX} className="icon"

        onClick={() => {

          // youtubeIframe().contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          setTrailerUrl(null);
          if (!showTrailer) {
            props.setCurrentMovie(null);
            setShowTrailer(false);
          } else {
            setShowTrailer(false);
          }
        }}

      />

      {/* getTrailerUrl(movie_id, api_key) */}

      {/* <iframe width="1276" height="718" src="https://www.youtube.com/embed/XeDbyVODQ5M" title="Godzilla x Kong: The New Empire | Tickets on Sale Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      <iframe id="movieModal" style={{ display: showTrailer? "flex" : "none" }} width="1276" height="718" src={ "https://www.youtube.com/embed/"+trailerUrl } title={movie_name} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>

      <div id="movieModal" style={{ backgroundImage: `url(${movie_poster})`, display: showTrailer? "none" : "flex"}}>


        <div id="movie_details_container">
          <div id="movie_details">
              <h1>{movie_name}</h1>
              <p id="date">10th January 2024 {runtime}</p>
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

        <button id="play_btn"
          onClick={() => {
            setShowTrailer(true);
            getTrailerUrl(movie_id, api_key)
              .then(url => {
                setTrailerUrl(url);
              })
          }}
        >
              <FontAwesomeIcon icon={faPlay} className="icon"/>
        </button>

      </div>
    </div>

  )
}


export default MovieDetails;

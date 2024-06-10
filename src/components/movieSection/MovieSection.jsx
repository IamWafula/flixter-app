import "./MovieSection.css"
import MovieCard from "../movieCard/MovieCard";
import { useState, useEffect } from "react";

async function searchMovies(searchTerm, api_key){
    return fetch('https://api.themoviedb.org/3/search/movie?query='+ searchTerm +'&api_key=' + api_key)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

async function getNowPlaying(api_key, page){
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+page+'&sort_by=popularity.desc'+'&api_key=' + api_key)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}


function MovieSection(props) {
    const MOVIE_API_KEY = import.meta.env.VITE_API_KEY
    let searchTerm = props.searchTerm

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlaying(MOVIE_API_KEY, 1)
            .then(data => {
                setMovies(data.results)
            })
        }, []);


    let example_movie = {
        "movie_id": 1,
        "movie_title" : "The Matrix",
        "movie_rating": "7.5",
        "movie_description" : "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "movie_poster" : "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/10/Keanu-Reeves-The-Matrix-Code.jpg"
    }

    return (
        <div id="movieSection">
            {
                movies.map(movie => {
                    return <MovieCard movie={movie} key={movie.id} />
                })
            }

        </div>
    );
}

export default MovieSection;

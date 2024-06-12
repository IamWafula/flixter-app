import "./MovieSection.css"
import MovieCard from "../movieCard/MovieCard";
import MovieDetails from "../movieDetails/MovieDetails";
import { useState, useEffect } from "react";

async function searchMovies(searchTerm, MOVIE_API_KEY, pages){
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${MOVIE_API_KEY}&page=${pages}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

async function getNowPlaying(api_key, page){
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
}

function MovieSection(props) {

    const MOVIE_API_KEY = import.meta.env.VITE_API_KEY

    let searchTerm = props.searchTerm

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);
    const [pageTitle, setPageTitle] = useState("Now Playing")
    const [totalPages, setTotalPages] = useState(Infinity)

    const [currentMovie, setCurrentMovie] = useState(null)

    useEffect(() => {
        if (searchTerm === ""){
            getNowPlaying(MOVIE_API_KEY, 1)
            .then(data => {
                setMovies([...data.results])
                setTotalPages(data.total_pages)
            })
            setPageTitle("Now Playing")
            setPages(1)

        // search function
        } else {
            searchMovies(searchTerm, MOVIE_API_KEY, 1)
            .then(data => {
                setMovies([...data.results])
                setTotalPages(data.total_pages)
            })
            setPageTitle("Results for: " + searchTerm)
            setPages(1)
        }

    }, [searchTerm]);
    return (
        <div id="mainSection">
            <h3>{pageTitle}</h3>

            <MovieDetails currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />

            <div id="movieSection">
            {
                movies.map(movie => {
                    if (!movie.backdrop_path){
                    } else{
                        return <MovieCard movie={movie} key={movie.id}
                                    setCurrentMovie={setCurrentMovie}
                        />
                    }
                })
            }
            </div>

            <button onClick={
                () => {
                    if (pages >= totalPages){
                        return
                    }
                    if (pageTitle === "Now Playing"){
                        getNowPlaying(MOVIE_API_KEY, pages+1)
                            .then(data => {

                                let unique_movies = [ ...movies, ...data.results ]
                                unique_movies = [...new Set(unique_movies)]

                                setMovies(unique_movies);
                                setPages(pages+1)
                            })
                    } else {
                        searchMovies(searchTerm, MOVIE_API_KEY, pages+1)
                            .then(data => {

                                let unique_movies = [ ...movies, ...data.results ]
                                unique_movies = [...new Set(unique_movies)]

                                setMovies(unique_movies);

                                setPages(pages+1)
                            })
                    }
                }
            }> add more </button>
        </div>

    );
}

export default MovieSection;

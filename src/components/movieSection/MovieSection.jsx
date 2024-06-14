import "./MovieSection.css"
import MovieCard from "../movieCard/MovieCard";
import MovieDetails from "../movieDetails/MovieDetails";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import Genre from "../Genre/Genre";

async function searchMovies(searchTerm, MOVIE_API_KEY, pages){
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${MOVIE_API_KEY}&page=${pages}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

async function getNowPlaying(api_key, page, option){
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${option}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}


function filterMovies(movies, filterOption){
    if (filterOption > 0){
        movies = movies.filter(movie => {
            // parseInt since select value is a string
            return movie.genre_ids.includes( parseInt(filterOption))
        } )
    }
    return movies;
}

function MovieSection(props) {

    const MOVIE_API_KEY = import.meta.env.VITE_API_KEY

    let searchTerm = props.searchTerm
    const [sortOption, setSortOption] = useState("popularity.desc")

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);
    const [pageTitle, setPageTitle] = useState("Now Playing")
    const [totalPages, setTotalPages] = useState(Infinity)
    const [showSidebar, setShowSidebar] = useState(true)

    const [favorites, setFavorites] = useState([])
    const [watchedMovies, setWatchedMovies] = useState([])

    const [currentMovie, setCurrentMovie] = useState(null)

    const [currentGenre, setCurrentGenre] = useState("All")

    let movie_genres = []

    useEffect(() => {
        if (currentMovie){
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }

        if (props.sortOption) {
            setSortOption(props.sortOption)
        }
    }, [currentMovie, props.sortOption])


    useEffect(() => {
        console.log(props.filterBy)
        if (searchTerm === ""){
            getNowPlaying(MOVIE_API_KEY, 1, props.sortOption)
                .then(data => {

                setMovies(filterMovies([...data.results], props.filterBy))
                setTotalPages(data.total_pages)

                })
            setPageTitle("Now Playing")
            setPages(1)
        // search function
        } else {
            searchMovies(searchTerm, MOVIE_API_KEY, 1)
            .then(data => {

                setMovies(filterMovies([...data.results], props.filterBy))
                setTotalPages(data.total_pages)

            })
            setPageTitle("Results for: " + searchTerm)
            setPages(1)
        }

    }, [searchTerm, props.sortOption, props.filterBy]);





    return (
        <div id="movieSectionContainer">
            <Sidebar allWatched={watchedMovies} favorites={favorites} showSidebar={showSidebar} />


            <div id="mainSection">
            {/* <h3>{pageTitle}</h3> */}
            <MovieDetails currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />

            <div id="genreSection" style={{
                display: "flex",
                flexDirection: "row",
                overflow: "scroll",
                overflowX: "hidden",
                 }}>
                {
                    movie_genres.map(genre => {
                        return (
                            <Genre key={genre} genre_name={genre}/>
                        )
                    })
                }
            </div>

            <div id="movieSection">

                {
                    movies.map(movie => {
                        if (!movie.backdrop_path){
                        } else{
                            return <MovieCard movie={movie} key={movie.id}
                                setCurrentMovie={setCurrentMovie}
                                setFavoriteMovie={setFavorites}
                                setWatchedMovies={setWatchedMovies}
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
                        getNowPlaying(MOVIE_API_KEY, pages+1, props.sortOption)
                            .then(data => {

                                let unique_movies = [ ...movies, ...data.results ]
                                unique_movies = [...new Set(unique_movies)]

                                setMovies(filterMovies(unique_movies, props.filterBy))
                                setPages(pages+1)
                            })
                    } else {
                        searchMovies(searchTerm, MOVIE_API_KEY, pages+1)
                            .then(data => {

                                let unique_movies = [ ...movies, ...data.results ]
                                unique_movies = [...new Set(unique_movies)]

                                setMovies(filterMovies(unique_movies, props.filterBy))

                                setPages(pages+1)
                            })
                    }
                }
            }> add more </button>
        </div>
        </div>


    );
}

export default MovieSection;

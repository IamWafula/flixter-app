import "./MovieCard.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'


function MovieCard(props) {


    let movie = props.movie;

    let movie_id = movie.id;
    let movie_title = movie.original_title;
    let movie_poster = movie.backdrop_path;
    let setCurrentMovie = props.setCurrentMovie;

    return (
        <div className="movieCard"
        >
            {/* put heart icon at the top */}
            <FontAwesomeIcon className="heart" icon={faStar} color="grey" onClick={
                (heart) => {
                    if (heart.target.style.color == "grey") {
                        heart.target.style.color = "gold";

                    }
                    else {
                        heart.target.style.color = "grey";
                    }

                }
            }
            />
            <img
                onClick={
                    () => {
                        setCurrentMovie(movie);
                    }
                }

            src={ movie_poster ?  "https://image.tmdb.org/t/p/w500" + movie_poster : "https://static.vecteezy.com/system/resources/previews/014/527/495/non_2x/plain-black-dslr-camera-free-png.png"} alt="Movie Poster" />
            <p className="title"> { movie_title } </p>
            <div className="ratingSection">
                <p className="rating"> Rating- </p>
                <p> { movie.movie_rating } </p>
                {/* replace with button */}
                <FontAwesomeIcon className="watched" icon={faEye} onClick={
                    (eye) => {
                        eye.stopPropagation()
                        if (eye.target.style.color == "grey") {
                            eye.target.style.color = "white";
                        } else {
                            eye.target.style.color = "grey";
                        }
                    }
                } />
            </div>
        </div>
    );
}

export default MovieCard;

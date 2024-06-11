import "./MovieCard.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'


function MovieCard(props) {


    let movie = props.movie;

    let movie_id = movie.id;
    let movie_title = movie.original_title;
    let movie_poster = movie.backdrop_path;

    return (
        <div className="movieCard">
            {/* put heart icon at the top */}
            <FontAwesomeIcon className="heart" icon={faHeart} color="red" onClick={
                (heart) => {
                    if (heart.target.style.color == "grey") {
                        heart.target.style.color = "red";
                    }
                    else {
                        heart.target.style.color = "grey";
                    }

                }
            }
            />
            <img src={ "https://image.tmdb.org/t/p/w500" + movie_poster} alt="Movie Poster" />
            <p className="title"> { movie_title } </p>
            <div className="ratingSection">
                <p className="rating"> Rating- </p>
                <p> { movie.movie_rating } </p>
                {/* replace with button */}
                <FontAwesomeIcon className="watched" icon={faEye} onClick={
                    (eye) => {
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

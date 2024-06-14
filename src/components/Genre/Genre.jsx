import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Genre.css"

function getGenreName(genreID){
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

export default function Genre(props) {


    if (props.genre_id){
        return (
          <div className="genre">
              <p>{getGenreName(props.genre_id)}</p>
          </div>
      )
    } else {
      return (
        <div className="genreFilter">
            <p>{props.genre_name}</p>
            <FontAwesomeIcon className="icon" icon={faX} onClick={props.onClick} style={ {} }/>
        </div>
      )
    }


}

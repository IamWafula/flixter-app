import "./Sort.css"

function getGenreID(genre) {
    switch (genre) {
        case "Action":
            return 28;
        case "Adventure":
            return 12;
        case "Animation":
            return 16;
        case "Comedy":
            return 35;
        case "Crime":
            return 80;
        case "Documentary":
            return 99;
        case "Drama":
            return 18;
        case "Family":
            return 10752;
        case "Fantasy":
            return 14;
        case "History":
            return 36;
        case "Horror":
            return 27;
        case "Music":
            return 10402;
        case "Mystery":
            return 9648;
        case "Romance":
            return 10749;
        case "Science Fiction":
            return 878;
        case "TV Movie":
            return 10570;
        case "Thriller":
            return 53;
        case "War":
            return 10751;
        case "Western":
            return 37;
        default:
            return -1;
    }
}





function Sort(props) {

    let movie_genres = ["All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];

    return (
        <form id="sort">

            <select placeholder="filter option" onChange={(e) => {
                props.setOptionGenre(e.target.value)
            } }>
                {movie_genres.map((item, index) => (
                    <option key={index} value={getGenreID(item)}>{item}</option>
                ))}
            </select>

            <select placeholder="search term" onChange={(e) => {
                props.setOptionSort(e.target.value)
            } }>
                <option value="popularity.desc">Popularity</option>
                <option value="vote_average.desc">Reviews</option>
                <option value="vote_count.desc">Views</option>
                <option value="primary_release_date.desc">Release Date</option>
            </select>


        </form>
    );
}

export default Sort;

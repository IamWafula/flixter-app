import FeaturedMovie from "../featuredMovie/FeaturedMovie"
import "./Sidebar.css"



function Sidebar(props){

    let all_watchedMovies = props.allWatched;
    let all_favorites = props.favorites;
    let show = props.showSidebar;

    return (
        <div id="sideBar" style={{ display : show ? "flex" : "none" }}>
            <h3> Favorites </h3>
                {all_favorites.map(movie => {
                   return <FeaturedMovie key={movie.id} movieData = {movie} watched={false} />
                })}
            <h3> Watched </h3>
                {all_watchedMovies.map( movie => {
                   return <FeaturedMovie key={movie.id} movieData = {movie} watched={true}></FeaturedMovie>
                })}
        </div>

    )
}

export default Sidebar;

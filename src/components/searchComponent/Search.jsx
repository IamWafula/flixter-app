import "./Search.css"



function Search(props) {

    return (
        <form id="search">
            <input type="text" placeholder="search term"></input>

            <button type="submit" >Search</button>
        </form>
    );
}

export default Search;

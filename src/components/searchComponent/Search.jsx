import "./Search.css"

import { useState, useEffect } from "react";


function Search(props) {

    const [searchValue, setSearchValue] = useState("");

    return (
        <form id="search">
            <input type="text" placeholder="search term"
                onChange={(e) => {
                    // props.setSearch(e.target.value)
                    setSearchValue(e.target.value)

                    if (e.target.value === "") {
                        props.setSearch("")
                    }
                }}
            ></input>

            <button type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    props.setSearch(searchValue)
                }}
            >Search</button>
        </form>
    );
}

export default Search;

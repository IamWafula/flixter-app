import "./SearchSort.css"

import Search from "../searchComponent/Search.jsx"
import Sort from "../sortComponent/Sort.jsx"


function SearchSort(props) {

    return (
        <div id="searchSort">
            <Search/>

            <Sort/>


        </div>
    );
}

export default SearchSort;

import "./SearchSort.css"

import Search from "../searchComponent/Search.jsx"
import Sort from "../sortComponent/Sort.jsx"


function SearchSort(props) {


    return (
        <div id="searchSort">
            <Search setSearch={props.setSearch} />

            <Sort setOptionSort={props.setOption} setOptionGenre={props.setFilter} />


        </div>
    );
}

export default SearchSort;

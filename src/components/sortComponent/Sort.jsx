import "./Sort.css"

function Sort(props) {

    return (
        <form id="sort">
            <select placeholder="search term">
                <option value="Relevance">Relevance</option>
                <option value="Date">Date</option>
                <option value="Reviews">Views</option>
            </select>

        </form>
    );
}

export default Sort;

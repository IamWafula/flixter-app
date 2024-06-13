import "./Sort.css"

function Sort(props) {

    return (
        <form id="sort">
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

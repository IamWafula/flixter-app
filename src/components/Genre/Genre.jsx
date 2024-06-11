import "./Genre.css"


export default function Genre(props) {
    return (
        <div className="genre">
            <p>{props.genre_name}</p>
        </div>
    )
}

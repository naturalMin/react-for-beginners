import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres, year}) {
    return (
        <div className = {styles.movie}>
            <img src = {coverImg} alt = {title} />
            <h2>
                <Link to = {`/movie/${id}`}>{title}({year})</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul>                
                {genres.map((g) => 
                    <li key={g}>{g}</li>
                )}                
            </ul>
        </div>
    );
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Description ({bgImg, title, year, des}) {
    return (
        <div>
            <h1>{title}({year})</h1>
            <img src = {bgImg} alt = {title} />
            <p>{des}</p>
            <Link to = "/" >Back</Link>
        </div>
    );
}

Description.prototype = {
    bgImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    des : PropTypes.string.isRequired,
}

export default Description; 
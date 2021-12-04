import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import styles from "../routes/Home.module.css";

function Detail() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);        
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[])
    return (
        <div className = {styles.container}>             
            {loading ? <div className = {styles.loader}>loading...</div> : 
            <div className = {styles.movies}>
                <Description 
                    key = {movie.id}                    
                    bgImg = {movie.large_cover_image}
                    title = {movie.title}
                    year = {movie.year}
                    des = {movie.description_full}
                />
            </div>}          
        </div>
    );
}
export default Detail;
import '../App.css';
import { Link } from 'react-router-dom';
  
function MovieCard({movie}){
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return(
        <div className='movie_element'>
            <Link to = {`${movie.id}`}>
                <img className='movie_poster'src={IMG_BASE_URL + movie.poster_path}/>
                <div><b>{movie.title}</b></div>            
            </Link>
        </div>
    )
}

export default MovieCard;

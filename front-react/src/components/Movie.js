import propTypes from "prop-types";
import "../components/Movie.css"

function Movie({id,title,coverImg}){
    return(
        <div id={id}>
            <img src = {"http://image.tmdb.org/t/p/original"+coverImg} alt={title} />
            <h2>{title}</h2>
        </div>

    );
}

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  };
  export default Movie;
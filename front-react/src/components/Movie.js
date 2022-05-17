import propTypes from "prop-types";
import "../components/Movie.css";
import { Col } from "react-bootstrap";
import { useState } from "react";
import BodyBlackoutStyle from "./BodyBlackoutStyle";
import Modal from "./Modal";

function Movie(props) {
  const base_url = "http://image.tmdb.org/t/p/";
  const [movie, setMovie] = useState([]);
  const [isVisble, setVisible] = useState(false);
  const onSetIsVisible = (active) => {
    setVisible(active);
  };
  const original = "original";

  const styles = {
    col: {
      paddingLeft: 5,
      paddingRight: 0,
    },
  };
  return (
    <Col style={styles.col}>
      <div id={props.id}>
        <img
          className="movieImg"
          onClick={() => {
            setMovie(props.movie);
            onSetIsVisible(true);
          }}
          src={"http://image.tmdb.org/t/p/original" + props.coverImg}
          alt={props.title}
        />
      </div>

      <div>
        {isVisble && <BodyBlackoutStyle onSetIsVisible={onSetIsVisible} />}
        {isVisble && (
          <Modal
            id={movie.id}
            coverImg={`${base_url}${original}${movie.backdrop_path}`}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            runtime={movie.runtime}
            genres={movie.genres}
            setVisible={setVisible}
          />
        )}
      </div>
    </Col>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};
export default Movie;

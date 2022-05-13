import propTypes from "prop-types";
import "../components/Movie.css";
import { Col } from "react-bootstrap";

function Movie({ id, title, coverImg }) {
  const styles = {
    col: {
      paddingLeft: 5,
      paddingRight: 0,
    },
  };
  return (
    <Col style={styles.col}>
      <div id={id}>
        <img
          src={"http://image.tmdb.org/t/p/original" + coverImg}
          alt={title}
        />
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

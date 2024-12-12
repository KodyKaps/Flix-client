import { Link } from 'react-router-dom';
import './movieCard.scss'
import PropTypes from 'prop-types'
export const MovieCard = (props) => {
  let {_id,Title, onMovieClicked} = props;
  return (
    <div className="movieCard">
      <div>{Title}</div>
      <Link to={`/movies/${_id}`}>Watch</Link>
    </div>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string
}
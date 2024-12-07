import './movieCard.scss'
import PropTypes from 'prop-types'
export const MovieCard = (props) => {
  let {Title, onMovieClicked} = props;
  return (
    <div className="movieCard" onClick={() => onMovieClicked()}>
      <div>{Title}</div>
    </div>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string,
  onMovieClicked: PropTypes.func.isRequired
}
import './movieCard.scss'
import PropTypes from 'prop-types'
export const MovieView = (props) => {
  let {Title, Description, CoverImageUrl, onClose} = props;
  return (
    <div className="movieCard" >
      <button onClick={() => onClose()}>X</button>
      <div>{Title}</div>
      <img src={CoverImageUrl} className='coverImage'/>
      <div>{Description}</div>
    </div>
  );
};


MovieView.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  CoverImageUrl: PropTypes.string,
  onMovieClicked: PropTypes.func.isRequired
}
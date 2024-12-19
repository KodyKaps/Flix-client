import { Link, useParams } from 'react-router-dom';
import './movie-view.scss'
import PropTypes from 'prop-types'

export const MovieView = (props) => {
  const {movieId} = useParams()
  const movie = props.movies.find(m => m._id === movieId)
  //console.log(movieId, movie)
  if(!movie){
    return <div>Loading</div>
  }
  let {Title, Description, CoverImageUrl} = movie;
  return (
    <div className="movieCard" >
      <Link to="/">X</Link>
      <div>{Title}</div>
      <img src={CoverImageUrl} className='coverImage'/>
      <div>{Description}</div>
    </div>
  );
};


MovieView.propTypes = {
  
  
}
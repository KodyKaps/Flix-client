import './movieCard.scss'
export const MovieCard = (props) => {
  let {Title, onMovieClicked} = props;
  return (
    <div className="movieCard" onClick={() => onMovieClicked()}>
      <div>{Title}</div>
    </div>
  );
};
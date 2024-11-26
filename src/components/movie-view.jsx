import './movieCard.scss'
export const MovieView = (props) => {
  let {Title, Description, CoverImageUrl} = props;
  return (
    <div className="movieCard" >
      <button onClick={() => console.log("Movie clicked", Title)}>X</button>
      <div>{Title}</div>
      <img src={CoverImageUrl} className='coverImage'/>
      <div>{Description}</div>
    </div>
  );
};
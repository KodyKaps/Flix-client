export const MovieCard = (props) => {
    let {title} = props;
    return (
      <div className="my-flix">
        <div>{title}</div>
      </div>
    );
  };
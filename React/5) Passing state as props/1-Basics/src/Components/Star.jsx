export default function Star(props) {
  return (
    //. Changing state of a parent using a child
    <img
      className="star-icon"
      src={require(`../images/${props.is_fav ? 'star-blue' : 'star'}.png`)}
      alt="star-icon"
      onClick={props.toggleFav}
    />
  );
}

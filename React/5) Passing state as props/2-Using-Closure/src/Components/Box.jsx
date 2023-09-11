export default function Box(props) {
  return (
    <div
      className="box"
      style={{ backgroundColor: props.on ? '#222222' : 'transparent' }}
      onClick={props.toggle}></div>
  );
}

export default function Nav() {
  return (
    <nav>
      <img
        src={
          //. Importing image
          require('../images/React-icon.svg.png')
        }
        alt="react-logo"
      />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

import Contact from './components/Contact.jsx';
import db from './db/db';

export default function App() {
  /*
    Props help to pass information to components (like we pass arguments into functions)

    Syntax for assigning a prop without using JS : //. propName="propValue"
    Syntax for assigning a prop value using JS : //. propName={propValue}
    Syntax for assigning multiple props from an object using spread operator : //. {...object}


    ~ A 'key' prop having unique values must be passed into components while using .map()
    ~ to construct multiple components
  
  */

  const elements = db.map((val, idx) => <Contact key={idx} {...val} />);
  return <div className="contacts">{elements}</div>;
}

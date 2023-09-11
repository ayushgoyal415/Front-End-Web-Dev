import React from 'react';
import Star from './Components/Star';

/*
  When a state is defined inside a parent component (eg. App), the current
  state value and the setter function can be passed down to one or more
  children components as props.
  
  This is especially useful when we want a child component to possess the
  ability to modify state of its parent or sibling components. eg. in the
  following case the star click action is able to change the color and the
  background color of its parent component.

*/

export default function App() {
  const [contact, set_contact] = React.useState({
    first_name: 'Abeesh',
    last_name: 'Goyal',
    phone: '+91 76960-90038',
    email: 'goyalabeesh@gmail.com',
    is_fav: true
  });

  function toggleFav() {
    set_contact(curr_contact => ({
      ...curr_contact,
      is_fav: !curr_contact.is_fav
    }));
  }

  const { first_name, last_name, phone, email, is_fav } = contact;

  return (
    <div className={is_fav ? 'contact fav' : 'contact'}>
      <img
        className="contact-icon"
        src={require('./images/contact.jpg')}
        alt="contact-placeholder"
      />
      <div className="name">
        <h3>
          {first_name} {last_name}
        </h3>
        <Star is_fav={is_fav} toggleFav={toggleFav} />
      </div>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

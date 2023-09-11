import React from 'react';

// Using object as state

export default function Contact() {
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
    <div className={`${is_fav ? 'contact fav' : 'contact'}`}>
      <img
        className="contact-icon"
        src={require('../images/contact.jpg')}
        alt="contact-placeholder"
      />
      <div className="name">
        <h3>
          {first_name} {last_name}
        </h3>
        <img
          onClick={toggleFav}
          className="star-icon"
          src={require(is_fav
            ? '../images/star-blue.png'
            : '../images/star.png')}
          alt="star-icon"
        />
      </div>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

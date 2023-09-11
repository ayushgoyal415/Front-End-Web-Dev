import React from 'react';

// Using boolean as state

export default function HappySad() {
  const [is_happy, set_is_happy] = React.useState(true);

  function change_mood() {
    set_is_happy(curr_is_happy => !curr_is_happy);
  }

  return (
    <div className={`container ${is_happy ? 'working' : 'faulty'}`}>
      <div className="text">
        <p>{is_happy ? '😊' : '😒'}</p>
      </div>

      <div>
        <button onClick={change_mood}>Change Mood</button>
      </div>
    </div>
  );
}

import React from 'react';

export default function FaultyCounter() {
  let count = 0;

  return (
    <div className="container faulty">
      <div className="text">
        <p>{count}</p>
      </div>

      <div className="buttons">
        <button onClick={e => ++count}>+</button>
        <button onClick={e => --count}>-</button>
      </div>
    </div>
  );
}

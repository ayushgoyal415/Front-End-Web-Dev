import React from 'react';

// Using array as state

export default function List() {
  const [items, set_items] = React.useState(['Item 1', 'Item 2']);

  function add_item() {
    set_items(function (curr_items) {
      /*
        . We should not push into the curr_items as it is current state and
        . we should not try to update it directly. Also in case of arrays,
        . the state passed inside callback function is immutable.
      */
      return [...curr_items, `Item ${curr_items.length + 1}`];
    });
  }

  return (
    <div className="list">
      <button onClick={add_item}>Add Item</button>
      <div>
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  );
}

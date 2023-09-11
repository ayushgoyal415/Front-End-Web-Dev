import React from 'react';
import Box from './Components/Box';
import db from './db/db';

export default function App() {
  const [boxes, set_boxes] = React.useState(db);

  function toggle(id) {
    //. Changing the 'on' property for only the box that triggered the fxn
    set_boxes(curr_boxes =>
      curr_boxes.map(i => (i.id === id ? { ...i, on: !i.on } : i))
    );
  }

  return (
    <main>
      {boxes.map(function (box) {
        return (
          //. Sending toggle fxn to each box element with box id as closure
          <Box
            key={box.id}
            on={box.on}
            toggle={() => toggle(box.id)}
          />
        );
      })}
    </main>
  );
}

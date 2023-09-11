import React from 'react';
import WindowTracker from './Components/WindowTracker';

export default function App() {
  const [is_shown, set_is_shown] = React.useState(false);
  function handle_click() {
    set_is_shown(curr => !curr);
  }

  return (
    <div>
      <button onClick={handle_click}>Toggle WindowTracker</button>
      {is_shown && <WindowTracker />}
    </div>
  );
}

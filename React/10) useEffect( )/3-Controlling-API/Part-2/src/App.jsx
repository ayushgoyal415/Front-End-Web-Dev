import React from 'react';

export default function App() {
  const [count, set_count] = React.useState(1);
  const [data, set_data] = React.useState({});

  function handle_click() {
    set_count(curr => curr + 1);
  }

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(d => d.json())
      .then(d => set_data(d));
  }, [count]);

  return (
    <>
      <button onClick={handle_click}>
        Get Next Character
        <br />
        <span>Count : {count}</span>
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

import React from 'react';

export default function App() {
  const [data, set_data] = React.useState({});

  console.log('Component Rendered');

  React.useEffect(() => {
    console.log('Effect was called');
    fetch('https://swapi.dev/api/people/1')
      .then(d => d.json())
      .then(d => set_data(d));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

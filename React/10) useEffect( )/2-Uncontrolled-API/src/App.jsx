import React from 'react';

/*

  * Primary tasks managed by React include :

  . Working with DOM/browser to render UI to the page
  . Manage and remember state between render cycles by using useState() hook
  . InShort React keeps the UI updated whenever the state changes.

  * Tasks not managed by React (ie uncontrolled tasks or 'side-effects' ) :
  
  . localStorage
  . API / Database interactions
  . Subscriptions (eg web sockets)
  . Syncing 2 different internal states together

  We can make React control the side-effects using the useEffect() hook.
 
*/

export default function App() {
  const [data, set_data] = React.useState({});

  /*

    * Below is an example of infinitely re-rendering React
    * page resulting from uncontrolled fetch API :

    ~  page renders by using state data currently {} >

      fetch API completes fetching the data 'd' >
      data 'd' is parsed >
      data 'd' is used to the set state data >

      page re-renders to update UI based on changed state data >

    ~  cycle starts again ...
  
  */


  console.log('Component Rendered');

  fetch('https://swapi.dev/api/people/1')
    .then(d => d.json())
    .then(d => set_data(d));

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

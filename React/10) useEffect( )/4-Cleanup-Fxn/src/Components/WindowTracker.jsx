import React from 'react';

//. Implementing the Window Tracker
/*
  * useState hook
  . creates a react state 'win_width' which can be set using the function 'set_win_width'.

  * useEffect hook
  . adds an eventListener to the 'window' element.
  
  * eventListener
  . calls the 'watch_width()' function whenever the window is resized
    
  * watch_width()
  . sets the 'win_width' to 'window.innerWidth' using the 'set_win_width()' function

  Note : As the addEventListener() fxn and the 'window' element are not under React's control,
  useEffect hook must be used here.

  Note : The dependency array is kept empty as we want only one eventListener to be registered
  whenever the component gets rendered for the first time. Otherwise adding multiple listeners
  would result in memory leaks.

*/

//. What happens when the button 'Toggle WindowTracker' is clicked to toggle on the WindowTracker ?
/*

  * Things happening inside the 'App' Component 

  .-> the function handle_click is called which sets the 'is_shown' state to true

  .-> the App re-renders to implement the UI changes based on the state changes

  .-> the WindowTracker component is called to be mounted
    

  * Things happening inside the 'WindowTracker' Component

  .-> the useState hook sets the state 'win_width' to window.innerWidth
    
  .-> the WindowTracker is mounted using the 'win_width' state

  .-> the useEffect hook calls the callback function

  
  * Things happening outside of React (ie. side effects)
  
  .-> The callback function logs the following to the console :
      'Window resize event listener registered'

  .-> An eventListener to window resize event is added

  .-> window resize eventListener is actively listening for window resize event

*/

//. What happens when the window is resized while the 'WindowTracker' component is toggled on ?
/*

  * Things happening outside of the React (ie. side effects)

  .-> A window resize event is raised and the registered eventListener is called

  .-> The eventListener calls the callback function 'watch_width()'

  .-> The 'watch_width()' function logs the following to the console :
      'Window resize event raised and watch_width() callback called'

  .-> 'win_width' is set to window.innerWidth by using the function 'set_win_width()'


  * Things happening inside the 'WindowTracker' Component

  .-> As the 'win_width' got updated, React re-renders the WindowTracker component

  .-> The useEffect hook is called but this time around, the useEffect hook will not
  .   call the callback function as its dependency array was set empty [] denoting that
  .   the callback function is called only when the component renders (not re-renders).


  * Things happening inside the 'App' component

  .-> None (as App's state ie 'is_shown' does not change on window resize)

*/

//. What happens when the button 'Toggle WindowTracker' is clicked to toggle off the WindowTracker ?
/*
  
  * Things happening inside the 'App' component

  .-> the function handle_click is called which sets the 'is_shown' state to false

  .-> the App re-renders to implement the UI changes based on the state changes

  .-> the WindowTracker component gets unmounted


  * Things happening inside the 'WindowTracker' Component

  .-> the returning function implemented inside the useEffect hook is called


  * Things happening outside of the React (ie. side effects)

  .-> the returning function logs the following to the console :
      'useEffect Cleanup function called, window resize eventListener removed'

  .-> The window resize eventListener is removed

  This returning function is known as useEffect cleanup function which saves the application from
  unwanted behaviors like memory leaks by cleaning up the effects.

  

*/

//. What happens if a returning function was not implemented inside the useEffect hook ?
/*

  - When we render the window tracker component for the first time, an eventListener gets
    registered to the window which is monitoring for the window size.

  - But when we toggle off the window tracker, the eventListener will not be removed as it
    is not under the control of React.
  
  - Now when we try to resize the window, the eventListener gets called and will try to set
    set the state of the 'WindowTracker' component which is not being rendered as this
    moment leading to memory leaks.
  
*/

export default function WindowTracker() {
  const [win_width, set_win_width] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watch_width() {
      console.log(
        'Window resize event raised and watch_width() callback called'
      );
      set_win_width(window.innerWidth);
    }

    console.log('Window resize event listener registered');
    window.addEventListener('resize', watch_width);

    return function () {
      console.log(
        'useEffect Cleanup function called, window resize eventListener removed'
      );
      window.removeEventListener('resize', watch_width);
    };
  }, []);

  return <h1>Window width : {win_width}</h1>;
}

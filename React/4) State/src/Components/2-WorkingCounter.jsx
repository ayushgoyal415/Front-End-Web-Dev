import React from 'react';

/*
. state v/s prop
- props are immutable whereas states are mutable
- states are used to remember pieces of information even when page
  re-renders

. useState() returns an array containing current value and a setter fxn

* Setter Function
The setter function can be used to update the current state. It accepts
either a value or a callback fxn as argument.

. Passing callback function as argument to setter function
- Use this method when we need the current state value to update the state.
- The callback function is passed the current value of the state.
- The returned value of the callback is used to set the new state value.

. Passing a value to set the current state
  Use this method when we don't need the current state value to update state.

*/

export default function WorkingCounter() {
  const [count, set_count] = React.useState(0);

  function increase() {
    /*
      . Providing value as an argument to setter function :
      . Note : We cannot use ++/--count to update state 'ie count'
      . Should be used only when we don't rely on previous value of state

      Not recommended in this case

    */
    set_count(count + 1);
  }

  function decrease() {
    /*
      . Providing callback function as argument to setter function :

      . Note : Here, we can use ++/--curr_count to update state but it is
      . not recommended to update the state directly.

      . Should be used when we need to use previous value of state

      Recommended in this case

    */
    set_count(curr_count =>  curr_count - 1);
  }

  return (
    <div className="container working">
      <div className="text">
        <p>{count}</p>
      </div>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

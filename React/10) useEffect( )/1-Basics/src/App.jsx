import React from 'react';

/*

  + SYNTAX => React.useEffect(callback function, ? dependency array)

  . Arguments :
  - callback function -> the function to run when the conditions are met.
  - dependency array -> optional, contains the values to monitor.
  
  . Conditions to be met in order to run the callback function :
  1: the page must have rendered/re-rendered completely.
  2: the value stored inside the dependency array must be updated on page
  rendering/re-rendering with following exceptions :

    - If dependency array is not sent, the callback will be called each time
      the page re-renders as there is no value to monitor.
    - If an empty dependency array is sent, the callback will be called only
      once, when the page renders for the first time.  
    - No matter what, the callback will be called when the page renders for
      the first time.



  . In the following example, three useEffect() callbacks are implemented :
    - fxn 1 : dependency array : []
    - fxn 2 : dependency array : [count]
    - fxn 3 : dependency array : none

  ~ Q : What happens when the page renders for the first time ?
  Ans : All 3 callback functions will be called.

  ~ Q : What happens when the button 'Add' is clicked ?
  Each time the button 'Add' is clicked, the state ie 'count' gets updated
  and thus the page re-renders to update the UI based on the updated state.
  Each time the page completes rendering or re-rendering, the React has to
  make a decision whether to call or not call the callback function present
  inside the useEffect hook. It decides so by comparing the values inside
  the dependency array before and after the page re-renders. After the 'Add'
  button is clicked In this case, the dependency values are as follows :
  - fxn 1 : [] => []
  - fxn 2 : [count] => [count + 1]
  - fxn 3 : NA

  Thus function 2 and 3 gets called each time the button 'Add' is clicked.

  ~ Q : What happens when the button 'Change Mood' is clicked ?
  The 'Change Mood' button updates the state 'is_happy' thus it re-renders
  the page. The dependency array values in this case are :
  - fxn 1 -> [] => []
  - fxn 2 -> [count] => [count]
  - fxn 3 -> NA

  Thus only the fxn 3 gets called when the button 'Change Mood' is clicked.
    
*/

export default function App() {
  const [count, set_count] = React.useState(0);
  const [is_happy, set_is_happy] = React.useState(true);

  function add() {
    set_count(curr => curr + 1);
  }
  function change_mood() {
    set_is_happy(curr => !curr);
  }

  React.useEffect(() => console.log(`Function 1 was called.`), []);
  React.useEffect(() => console.log(`Function 2 was called.`), [count]);
  React.useEffect(() => console.log(`Function 3 was called.`));

  return (
    <>
      <button onClick={add}>
        Add
        <br />
        <span>Count : {count}</span>
      </button>
      <button onClick={change_mood}>
        Change Mood
        <br />
        <span>Mood : {is_happy ? 'Happy' : 'Sad'}</span>
      </button>
    </>
  );
}

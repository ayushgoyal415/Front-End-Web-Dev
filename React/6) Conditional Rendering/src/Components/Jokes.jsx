import React from 'react';

export default function Jokes(props) {
  const { setup, punchline, one_liner, category } = props;
  const [is_shown, set_is_shown] = React.useState(false);

  function toggle() {
    set_is_shown(curr_is_shown => !curr_is_shown);
  }

  /*

   * Setting up variables and then using them for conditional rendering

    . Only &&, || and ternary operators are allowed within { } inside JSX
    ~ We cannot use if-else within { } inside JSX
    
    If a condition for rendering is complex (ie. is not simple to be
    handled using &&, || and ternary), then define a variable here (ie
    outside JSX) and set its value using if-else statements. Then this
    variable can be used below.

  */

  const boxShadow =
    category === 'Dark' ? '6px 6px 10px rgba(255, 0, 0, 0.6)' : '';
  const fontFamily = category === 'Programming' ? 'cascadia code' : '';

  let backgroundColor = is_shown ? 'rgb(255, 136, 0)' : 'rgb(3, 217, 3)';
  if (category === 'Dark' && !is_shown) backgroundColor = 'rgb(255, 0, 0)';
  if (category === 'Dark' && is_shown) backgroundColor = 'rgb(3, 217, 3)';

  return (
    <div style={{ boxShadow, fontFamily }}>
      {!one_liner && (
        <button onClick={toggle} style={{ backgroundColor }}>
          {is_shown ? 'Hide' : 'Show'} Punchline
        </button>
      )}
      <p>{setup || one_liner}</p>
      {!one_liner && is_shown && <hr />}
      {!one_liner && is_shown && <p>{punchline}</p>}
    </div>
  );
}

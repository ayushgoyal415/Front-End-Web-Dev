import { radio_data } from '../db/db';

/*
  * Radio Groups

  - In order to be treated as a group, all radio buttons inside a radio group
    must share the same name.

  - Once the radio group is created, selecting any radio button in that group
    automatically deselects any other selected radio button in the same group.
    Thus, only one radio button in a group can be selected at the same time.
    
  - You can have as many radio groups on a page as you want, as long as each
    group has its own name.
    

  * Value attribute of radio buttons

  - The value attribute defines the unique value associated with each radio button.
    The value is not shown to the user, but is the value that is sent to the server
    on "submit" to identify which radio button that was selected.

*/

export default function Radio({ change_handler, form_data }) {
  return (
    <>
      {radio_data.map(function (i) {
        return (
          <fieldset key={i.name}>
            <legend>{i.legend}</legend>
            {i.options.map(function (option, idx) {
              return (
                <label className="radio-label" key={i.name + idx}>
                  <input
                    type="radio"
                    name={i.name}
                    value={option}
                    checked={form_data[i.name] === option}
                    onChange={change_handler}
                  />
                  {option}
                  <div className="radio-box"></div>
                </label>
              );
            })}
          </fieldset>
        );
      })}
    </>
  );
}

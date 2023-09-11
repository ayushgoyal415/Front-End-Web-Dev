import { select_data } from '../db/db';

export default function Select({ change_handler, form_data }) {
  return (
    <>
      {select_data.map(function (i) {
        return (
          <label className="select-label" key={i.name}>
            {i.label}
            <select
              className="select-drop"
              name={i.name}
              value={form_data[i.name]}
              onChange={change_handler}>
              {i.options.map(function (option) {
                return (
                  <option value={option} key={option} className="select-option">
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
        );
      })}
    </>
  );
}

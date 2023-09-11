import { checkbox_data } from '../db/db';

export default function Checkbox({ change_handler, form_data }) {
  return (
    <>
      {checkbox_data.map(function (i) {
        return (
          <label className="checkbox-label" key={i.name}>
            {i.label}
            <input
              name={i.name}
              type='checkbox'
              checked={form_data[i.name]}
              onChange={change_handler}
            />
            <div className="checkbox-box"></div>
          </label>
        );
      })}
    </>
  );
}

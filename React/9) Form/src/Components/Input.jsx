import { classic_inputs_data } from '../db/db';

export default function Input({ change_handler, form_data }) {
  return (
    <>
      {classic_inputs_data.map(function (i) {
        return (
          <input
            className='input-box'
            key={i.name}
            name={i.name}
            placeholder={i.placeholder}
            type={i.type}
            value={form_data[i.name]}
            onChange={change_handler}
          />
        );
      })}
    </>
  );
}

import { textarea_data } from '../db/db';

export default function Textarea({ change_handler, form_data }) {
  return (
    <>
      {textarea_data.map(function (i) {
        return (
          <textarea
            className='textarea-box'
            key={i.name}
            name={i.name}
            placeholder={i.placeholder}
            value={form_data[i.name]}
            onChange={change_handler}
          />
        );
      })}
    </>
  );
}

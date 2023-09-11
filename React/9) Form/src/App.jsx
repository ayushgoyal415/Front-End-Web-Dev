import React from 'react';

import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Select from './Components/Select';

import { initial_form_data } from './db/db';

export default function App() {
  const [form_data, set_form_data] = React.useState(initial_form_data);

  function change_handler(e) {
    const { name, value, type, checked } = e.target;
    set_form_data(function (curr_form_data) {
      return {
        ...curr_form_data,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function submit_handler(e) {
    e.preventDefault();
    console.log(form_data);
  }

  const state = { change_handler, form_data };

  return (
    <form className="form-box" onSubmit={submit_handler}>
      <Input {...state} />
      <Textarea {...state} />
      <Checkbox {...state} />
      <Radio {...state} />
      <Select {...state} />
      <button className="submit-button">Submit</button>
    </form>
  );
}

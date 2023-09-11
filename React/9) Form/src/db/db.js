const data = [
  {
    name: 'firstName',
    value: '',
    placeholder: 'First Name',
    type: 'text'
  },
  {
    name: 'email',
    value: '',
    placeholder: 'Email',
    type: 'email'
  },
  {
    name: 'password',
    value: '',
    placeholder: 'Password',
    type: 'password'
  },
  {
    name: 'comments',
    value: '',
    placeholder: 'Enter your comments here',
    type: 'textarea'
  },
  {
    name: 'is_friendly',
    value: '',
    label: 'Are you friendly?',
    type: 'checkbox'
  },
  {
    name: 'employment_status',
    value: '',
    legend: 'Current Employment Status',
    type: 'radio',
    options: ['Unemployed', 'Part-time', 'Full-time']
  },
  // prettier-ignore
  {
    name: 'favorite_color',
    value: '',
    label: 'What is your favorite color ?',
    type: 'select',
    options: [
      '--', 'Red', 'Green', 'Blue', 'Orange', 'Black', 'Yellow', 'Purple', 'Brown', 'Pink'
    ]
  }
];

export const classic_inputs_data = data.filter(
  i => i.type === 'text' || i.type === 'email' || i.type === 'password'
);
export const textarea_data = data.filter(i => i.type === 'textarea');
export const checkbox_data = data.filter(i => i.type === 'checkbox');
export const radio_data = data.filter(i => i.type === 'radio');
export const select_data = data.filter(i => i.type === 'select');

export const initial_form_data = data.reduce((acc, val) => {
  acc[val.name] = val.value;
  return acc;
}, {});

import ReactDOM from 'react-dom/client';

//. Using inline JSX
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<p>This is a inline JSX</p>);

//. Using JSX stored in variables
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const variable = <p>This is JSX stored inside variable</p>;
root2.render(variable);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
function Para() {
  /*
  . Using JSX returned from a function : aka React Component

  - By convention, use PascalCasing for react custom components
  - By convention, don't use function call operator while rendering JSX
    returned from a function

  */

  return <p>This is JSX Component</p>;
}
root3.render(<Para />);

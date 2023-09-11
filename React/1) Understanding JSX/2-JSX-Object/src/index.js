import ReactDOM from 'react-dom/client';
const jsx = <p>This is JSX</p>;

/*

  * DOM objects
  When we append elements to html using vanilla JS methods like .append(),
  innerHTML, etc., JS converts the html string to DOM object which is then
  added to the html and gets rendered onto page.

  * JSX objects
  When we write html directly in JS, ie without string, JS constructs a JSX
  object which is very similar to plain JS object. React then renders this
  JSX object by creating something known as virtual DOM.

  * pre and code elements
  pre element tells the browser that the content inside is pre-formatted and
  it can be displayed without any modification. So browser will not remove
  white spaces, new lines etc.

  code element is for making the content more semantic and denotes that the
  content inside is a code snippet. It has nothing to with formatting. It is
  advised to use like this, :
    
  <pre>
    <code>
      'Code here'
    </code>
  </pre>

*/

//. Trying to render JSX object using Vanilla JS
document.getElementById('root1').append(jsx);

//. Trying to render JSX object using Vanilla JS, after stringify it
document.getElementById('root2').innerHTML = `<pre>${JSON.stringify(jsx,null,2)}</pre>`; // prettier-ignore

//. Rendering JSX object using React
ReactDOM.createRoot(document.getElementById('root3')).render(jsx);

//* Getting general information
console.log('\u001b[32m domain : ', document.domain);
console.log('\u001b[32m url : ', document.URL);
console.log('\u001b[32m doctype : ', document.doctype);
console.log('\u001b[32m title : ', document.title);

//* Getting one element at a time
console.log('\u001b[32m Document Element : ', document.documentElement);
console.log('\u001b[32m Head Element : ', document.head);
console.log('\u001b[32m Body Element : ', document.body);

/*
  * Getting multiple elements at a time ->
  
  - The following properties return elements into an HTML collection.
  - An HTML collection is like an array and elements can be accessed
    using []. However, we cannot call Array prototype functions on it.
*/
console.log('\u001b[32m Form Collection : ', document.forms);
console.log('\u001b[32m Link Collection : ', document.links);
console.log('\u001b[32m Image Collection : ', document.images);
console.log('\u001b[32m All elements collection : ', document.all);

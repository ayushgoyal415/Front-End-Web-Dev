// Making a global function to grab elements quickly
/** @param {string} s */
const $ = s => document.querySelector(s);

//* Model Component
class Store {
  static getBooks = () => JSON.parse(localStorage.getItem('books')) || [];

  static getBook = isbn => this.getBooks().find(book => book.isbn == isbn);

  static saveBooks = books =>
    localStorage.setItem('books', JSON.stringify(books));

  static addBook = book => this.saveBooks([...this.getBooks(), book]);

  static deleteBook = isbn =>
    this.saveBooks(this.getBooks().filter(book => book.isbn !== isbn));
}

//* View Component
class UI {
  static displayBooks(books) {
    books.forEach(book => UI.displayBook(book));
  }

  static displayBook(book) {
    const list = $('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = /*HTML*/ `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>
          <button id="${book.isbn}" class="delete">&#10006;</button>
      </td>

      <style>
        .delete {
          color: red;
          border: none;
          background-color: white;
          font-size: 15px;
          opacity: 0.3;
          cursor: pointer;
        }
        .delete:hover {
          opacity: 0.5;
        }
        .delete:active{
          opacity: 1;
        }
      </style>
    `;
    list.appendChild(row);
  }

  static deleteRow = row => row.remove();

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const [container, form] = [$('.container'), $('#book-form')];
    container.insertBefore(div, form);
    setTimeout(() => div.remove(), 3000);
  }

  static clearFields() {
    $('#title').value = '';
    $('#author').value = '';
    $('#isbn').value = '';
  }
}

//* Controller Component
document.addEventListener('DOMContentLoaded', () =>
  UI.displayBooks(Store.getBooks())
);
$('#book-form').addEventListener('submit', addBook);

//. Cannot add event listener to delete button directly as it is not defined
$('#book-list').addEventListener('click', deleteBook);

function addBook(e) {
  e.preventDefault();
  const [title, author, isbn] = [
    $('#title').value.trim(),
    $('#author').value.trim(),
    $('#isbn').value.trim()
  ];

  if (title === '' || author === '' || isbn === '')
    return UI.showAlert('Please fill in all fields', 'alert-danger');

  if (!/^\d{13}$/.test(isbn))
    return UI.showAlert('Invalid ISBN', 'alert-danger');

  if (Store.getBook(isbn))
    return UI.showAlert('Book with same ISBN already exists', 'alert-danger');

  const book = { title, author, isbn };
  UI.displayBook(book);
  Store.addBook(book);
  UI.showAlert('Book Added', 'alert-success');
  UI.clearFields();
}

function deleteBook(e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    UI.deleteRow(row);

    const isbn = e.target.id;
    Store.deleteBook(isbn);

    UI.showAlert('Book Removed', 'alert-success');
  }
}

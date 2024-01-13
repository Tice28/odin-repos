const myLibrary = [];
const addBookButton = document.getElementById("add");
const cancelButton = document.getElementById("cancelButton");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const readBookInput = document.getElementById("readBookInput");
const popup = document.getElementById("popup");
const saveButton = document.getElementById("saveButton");
const bookCont = document.getElementsByClassName("book-container")[0];

function book(title, author, pages, beenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.beenRead = beenRead;
  this.location = myLibrary.length;
  this.readBook = function (read) {
    this.beenRead = read;
  };
}

addBookButton.addEventListener("click", () => {
  popup.style.opacity = popup.style.opacity == 1 ? 0 : 1;
});

cancelButton.addEventListener("click", () => {
  clearData();
});

saveButton.addEventListener("click", () => {
  if (isFilled()) {
    addToLib();
    refreshLibrary();
    clearData();
  }
});

function clearData() {
  popup.style.opacity = 0;
  titleInput.value = null;
  authorInput.value = null;
  pagesInput.value = null;
  readBookInput.checked = false;
}

function displayBook(book) {
  const newBook = document.createElement("div");
  const cardInfo = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const bookRead = document.createElement("button");
  const bookDelete = document.createElement("button");

  newBook.classList.add("card");
  cardInfo.classList.add("card-info");
  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  if (book.beenRead) {
    bookRead.classList.add("btn-read");
    bookRead.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>`;
    bookRead.addEventListener("click", () => {
      if (book.beenRead == true) {
        book.readBook(false);
        bookRead.classList.remove("btn-read");
        bookRead.classList.add("btn-not-read");
        bookRead.innerHTML =
          bookRead.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-box</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" /></svg>`;
      } else {
        book.readBook(true);
        bookRead.classList.add("btn-read");
        bookRead.classList.remove("btn-not-read");
        bookRead.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>`;
      }
    });
  } else {
    bookRead.classList.add("btn-not-read");
    bookRead.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-box</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" /></svg>`;
    bookRead.addEventListener("click", () => {
      if (book.beenRead == true) {
        book.readBook(false);
        bookRead.classList.remove("btn-read");
        bookRead.classList.add("btn-not-read");
      } else {
        book.readBook(true);
        bookRead.classList.add("btn-read");
        bookRead.classList.remove("btn-not-read");
        bookRead.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>`;
      }
    });
  }
  bookDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>trash-can-outline</title>
      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>`;

  bookDelete.addEventListener("click", () => {
    myLibrary.splice(newBook.location, 1);
    newBook.remove();
  });

  bookCont.appendChild(newBook);
  newBook.append(cardInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(author);
  cardInfo.appendChild(pages);
  newBook.appendChild(bookRead);
  newBook.appendChild(bookDelete);
}

function addToLib() {
  myLibrary.push(
    new book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readBookInput.checked
    )
  );
  clearData();
}

function refreshLibrary() {
  removeAllChildNodes(bookCont);
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function isFilled() {
  if (
    titleInput.value != "" &&
    authorInput.value != "" &&
    pagesInput.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}

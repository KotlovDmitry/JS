'use strict';

const adv = document.querySelectorAll('.adv');
adv[0].remove();

const book = document.querySelectorAll('.book');
const books = document.querySelectorAll('.books');

book[0].remove();
book[1].remove();
book[2].remove();
book[3].remove();
book[4].remove();
book[5].remove();

books[0].append(book[2]);
books[0].prepend(book[5]);
books[0].prepend(book[3]);
books[0].prepend(book[4]);
books[0].prepend(book[0]);
books[0].prepend(book[1]);

const book3 = document.querySelectorAll('h2 a');
book3[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


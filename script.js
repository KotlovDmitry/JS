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

book[0].classList.add('booklist1');
const booklist1 = document.querySelectorAll('.booklist1 li');
booklist1[4].after(booklist1[2]);
booklist1[3].after(booklist1[6]);
booklist1[6].after(booklist1[8]);
booklist1[5].after(booklist1[2]);
booklist1[7].after(booklist1[2]);
booklist1[9].after(booklist1[2]);

book[5].classList.add('booklist2');
const booklist2 = document.querySelectorAll('.booklist2 li');
booklist2[1].after(booklist2[9]);
booklist2[4].after(booklist2[2]);
booklist2[7].after(booklist2[5]);

book[2].classList.add('book6');
const book6 = document.querySelectorAll('.book6 li');
const newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
book6[8].append(newLi);
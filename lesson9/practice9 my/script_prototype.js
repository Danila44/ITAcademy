/* Разработка приложения “Книги”.
1. Объявить класс под названием “Book”
2. Класс “Book”. У каждой книги(созданного объекта от класса Book) есть “название”, “автор”, “количество экземпляров”, “количество страниц”.
 Есть метод который выводит количество страниц книги.
 Есть метод который считает количество глав(1 глава равна 10 страницам).


3. Класс “Journal”. У каждого журнала(созданного объекта от класса Journal)есть поля: "название", “год выпуска”, "месяц выпуска," номер выпуска”, “количество страниц”.
 Есть метод который выводит данные о количестве страниц.
 Есть метод, который выводит такие данные как: "номер выпуска", "год выпуска", "месяц выпуска".
 */

function Book(title, countPages, autor, countCopies) {
    this.title = title;
    this.autor = autor;
    this.countPages = countPages;
    this.countCopies = countCopies;
}
Book.prototype.getCountPages = function () {
    return Math.round(this.countPages);
}
Book.prototype.getCountChapters = function () {
    return Math.round(this.countPages / 10)
}

let book = new Book('Title', 'Max', 199, 27);

// console.log(book);
// console.log(book.getCountChapters());
// console.log(book.getCountPages());

function Journal(title, countPages, yearProd, monthProd, numbProd) {
    Book.call(this, title, countPages);
    this.yearProd = yearProd;
    this.monthProd = monthProd;
    this.numbProd = numbProd;

}

// Прототипоное наследование 
Journal.prototype = Object.create(Book.prototype);


Journal.prototype.getData = function () {
    return this.yearProd + ' ' + this.monthProd + ' ' + this.numbProd;
}


let journal = new Journal('NewT', 199, 2022, 94, 10);
console.log(journal);
console.log(journal.getCountPages());
console.log(journal.getData());














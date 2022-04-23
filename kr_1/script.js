
//1. Напишите функцию, которая принимает массив чисел и возвращает сумму своих кубов.

//sumOfCubes([1, 5, 9]) ➞ 855
// Считаем так: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

//sumOfCubes([3, 4, 5]) ➞ 216

//sumOfCubes([2]) ➞ 8

//sumOfCubes([]) ➞ 0//

//Если дан пустой массив, верните 0.


function sumOfCubes(arr) {
    const newArr = []
    let sum = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 3

    }
    return sum
}

//console.log(sumOfCubes([1, 5, 9]));
//console.log(sumOfCubes([3, 4, 5]));
//console.log(sumOfCubes([2]));
//console.log(sumOfCubes([]));










// 2. Создайте функцию, которая принимает две строки в качестве аргументов и возвращает количество повторений,
//когда первая строка (единственный символ) встречается во второй строке.

//Ваш вывод должен быть чувствительным к регистру (см. Второй пример).

/* charCount("a", "games") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4 */


function charCount(str1, str2) {
    let sum = 0;
    let arr = Array.from(str2.split('').join(''))
    for (let i = 0; i < arr.length; i++) {
        if (str2.includes(str1) && arr[0] === arr[i]) {
            sum += 1
        }
    }
    return sum
}
//console.log(charCount("a", "games"));
//console.log(charCount("c", "Chamber of secrets"));
//console.log(charCount("b", "big fat bubble"));








//3. Создайте функцию, которая принимает строку имени и проверяет, насколько хорошее данное имя. Предварительно загруженный словарь оценок алфавита доступен в переменной scores. Сложите буквы своего имени, чтобы получить общий балл. */


var scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
    "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
}

//Верните результат в соответствии со следующими правилами:

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"


// nameScore("JOHN") ➞ "THE BEST"

// nameScore("YOU") ➞ "VERY GOOD" 

// nameScore("MATT") ➞ "THE BEST"

// nameScore("PUBG") ➞ "NOT TOO GOOD"















//4. Создайте функцию, которая определяет, соответствует ли заказ для бесплатной доставки. Заказ имеет право на бесплатную доставку, если общая стоимость приобретенных товаров превышает 50 долларов.

// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// freeShipping({ "Monopoly": 11.99, "Secret Book": 35.99, "Bananagrams": 13.99 }) ➞ true


//При расчете общей стоимости заказа игнорируйте налоги и дополнительные сборы.


















//5.Создайте функцию, которая принимает arr и возвращает сумму чисел между двумя "1".


// spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

// spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

// spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

// spaceApart([3, "1", 2, 9, "1", 0, 7, "1"]) ➞ "invalid"

/* 
Вернуть "invalid", если:
Отрицательное число присутствует внутри arr.
Количество единиц не равно двум.
Игнорировать любую другую строку внутри arr.
Обратите внимание, что "1" не равно 1. */

function spaceApart(arr) {
    
}
//console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"])); 
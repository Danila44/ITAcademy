//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

//Обратите внимание, что num также включено в возвращаемый массив.

/*const createArr = (num, length) => {
    const arr = []
    for (let index = 1; index <= length; index++) {
        arr.push(num * index)

    }
    return arr;
}

createArr(7, 5)*/










//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */
//Обратите внимание, что num также включено в возвращаемый массив.


function comeback(num, length) {
    const arrayOfMultiples = []
    for (let index = 1; index <= length; index++) {
        arrayOfMultiples.push(num * index)

    }
    console.log(arrayOfMultiples);
}
comeback(7, 5)













//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */
/*Math.floor()
Math.ceil()*/

/*const numberSplit = arg => {
    const arr = []
    let num = arg / 2
    arr.push(Math.floor(num), Math.ceil(num))
    return arr
}
console.log(numberSplit(-9));
numberSplit(11)*/










//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */


function half(number) {
    const arrayHalf = []
    let numbers = number / 2
    if (numbers >= 0) {
        arrayHalf.push(Math.floor(numbers), Math.ceil(numbers))
    } else {
        arrayHalf.push(Math.ceil(numbers), Math.floor(numbers))
    }
    return arrayHalf
}
console.log(half(-11));
half(-11)






/*const numberSplit = arg => {
    const arr = []
    let num = arg / 2
    arr.push(Math.floor(num), Math.ceil(num))
    return arr
}
console.log(numberSplit(-11));
numberSplit(-11)*/
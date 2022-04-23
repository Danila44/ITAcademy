/*TASK1*/
/*
function incrementElements(arr) {
    for (let index = 0; index < arr.length; index++) {
        arr[index]++
    }
    return arr
}
console.log(incrementElements([0, 1, 2, 3]));*/




/*TASK2*/

/*
function reverse(num) {
    const arrReverse = []
    for (let index = num.length - 1; index >= 0; index--) {
        arrReverse.push(num[index])

    }

    console.log(arrReverse[Math.floor((arrReverse.length - 1) / 2)]);
    return arrReverse



}

console.log(reverse([10, 20, 30, 40, 50, 60]));*/






/*
let carName = `Ford`
let carYear = 1990
let personYear = 1999

function calculateYar(year) {
    let newYear = 2022
    let carrentYear = newYear - year
    return carrentYear
}
calculateYar()


function definitionYear(year, name, carrent) {


    console.log(`Возраст ${name} ${calculateYar(year) < carrent ? "меньше" : "больше"} ${carrent} лет`)

    if (calculateYar(year) < carrent) {
        console.log(`Возраст ${name} меньше ${carrent} лет`);

    } else {
        console.log(`Возраст ${name} больше ${carrent} лет`);

    }
}
definitionYear(carYear, `машины`, 40)
definitionYear(personYear, `человека`, 25)*/




/*TASK3 */

function tuchIn(arr1, arr2) {
    let lastElement = arr1[1]
    arr1.pop()
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])

    }
    arr1.push(lastElement)


    return arr1
}
/*console.log(tuchIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));*/



/* homework */
/*task1 */

function convertElements(arr) {
    const newArray = []

    // arr.reverse().forEach(element => newArray.push(String(element)));


    for (let i = 0; i < arr.length; i++) {
        //arr[i] += String()
        newArray.push(String(arr[i]))

    }



    return newArray
}
/*console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));*/






/*task2*/

function numericTrue(parm) {
    let counter = 0

    for (let i = 0; i < parm.length; i++) {
        if (parm[i] === true) counter++
    }

    return counter
}
/*console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));*/



function counterArr(num) {
    const newArr = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] === true) newArr.push(num[i])
    }
    return newArr.length
}
/*console.log(counterArr([true, false, false, true, false]));
console.log(counterArr([false, false, false, false]));
console.log(counterArr([]));/*


/* task3 */
/*
function highLow(arr) {
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}

highLow([1, 2, 3, 4, 5]) 




function minNum(num) {
    let min, max;
    for (let i = 0; i < num.length; i++) {
        if (num[i]<num[i+1]) {

        } else {

        }
    }

}
minNum([1, 2, 3, 4, 5]);*/

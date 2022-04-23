/*task1 */
/*
function convertElements(arr) {
    const newArray = []

    // arr.reverse().forEach(element => newArray.push(String(element)));
    for (let i = 0; i < arr.length; i++) {
        //arr[i] += String()
        newArray.push(String(arr[i]))
    }
    
    return newArray
}
console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));*/


/*task2*/
/*
function numericTrue(parm) {
    let counter = 0

    for (let i = 0; i < parm.length; i++) {
        if (parm[i] === true) counter++
    }
    return counter

}
console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));
*/
/*second way */
/*
function counterArr(num) {
    const newArr = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] === true) newArr.push(num[i])
    }
    return newArr.length

}
console.log(counterArr([true, false, false, true, false]));
console.log(counterArr([false, false, false, false]));
console.log(counterArr([]));


*/


/* task3 */
/*
function highLow(arr) {
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}

highLow([1, 2, 3, 4, 5]) */


/*
function highLow(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.sort()
    }
    console.log(arr[0], arr[arr.length-1]);
    return arr
}

highLow([1, 2, 3, 4, 5]) 
highLow([1, 2, -3, 4, 5]) 
highLow([1, 9, 3, 4, -5]) 
highLow([13])  
highLow([23, 100010, 97000000, 96, 65, 23]) 


*/
let min = null;

function highLow(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            min += i
        }

    }

}

//highLow([3, 4, 5, 6, 7])
highLow([10, 20, 30, 40, 50]) 
console.log(min);